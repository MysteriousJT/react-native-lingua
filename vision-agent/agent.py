from pathlib import Path
from typing import Any

from dotenv import load_dotenv

from vision_agents.core import Agent, AgentLauncher, User, Runner
from vision_agents.plugins import getstream, openai

# Load credentials from the parent repo's .env so this service can be run
# from either the repo root or from within vision-agent/
_parent_env = Path(__file__).parent.parent / ".env"
load_dotenv(_parent_env if _parent_env.exists() else Path(__file__).parent / ".env")

# ── Language support ──────────────────────────────────────────────────────────

LANGUAGE_NAMES: dict[str, str] = {
    "es": "Spanish",
    "fr": "French",
    "ja": "Japanese",
    "pt": "Brazilian Portuguese",
}

# ── System prompt ─────────────────────────────────────────────────────────────

SYSTEM_PROMPT = """\
You are Lingo, a warm, encouraging AI language teacher. You always speak English \
and teach the student's target language through conversation, repetition, and guided practice.

Your teaching style:
- Greet the student enthusiastically when the lesson starts, then explain today's topic.
- Introduce vocabulary and phrases one at a time, giving clear pronunciation tips after each.
- Keep every response short — this is a voice lesson, not a lecture.
- Ask the student to repeat phrases back to you; gently correct mistakes.
- Celebrate progress with brief encouragement before moving on.
- Never switch away from teaching the current lesson topic.
"""


def _build_instructions(kwargs: dict[str, Any]) -> str:
    """Merge lesson-specific vocabulary and phrases into the system prompt."""
    base: str = kwargs.get("system_prompt") or SYSTEM_PROMPT

    vocabulary: list[dict] = kwargs.get("vocabulary") or []
    phrases: list[dict] = kwargs.get("phrases") or []

    vocab_lines = [
        "- {word} = {translation}".format(**v)
        + (f" (pronunciation: {v['pronunciation']})" if v.get("pronunciation") else "")
        for v in vocabulary
        if isinstance(v, dict) and v.get("word")
    ]
    phrase_lines = [
        "- {text} = {translation}".format(**p)
        for p in phrases
        if isinstance(p, dict) and p.get("text")
    ]

    extra = ""
    if vocab_lines:
        extra += "\n\nVocabulary to teach this lesson:\n" + "\n".join(vocab_lines)
    if phrase_lines:
        extra += "\n\nKey phrases to practise:\n" + "\n".join(phrase_lines)

    return base + extra


# ── Agent factory ─────────────────────────────────────────────────────────────


async def create_agent(**kwargs) -> Agent:
    instructions = _build_instructions(kwargs)
    # OpenAI Realtime handles STT and TTS natively — do not pass stt/tts.
    return Agent(
        edge=getstream.Edge(),
        agent_user=User(name="Lingo", id="lingo-teacher"),
        instructions=instructions,
        llm=openai.Realtime(voice="alloy"),
    )


# ── Call lifecycle ────────────────────────────────────────────────────────────


def _language_from_call_id(call_id: str) -> str:
    """Return the human-readable language name from a call_id.

    Call ID format set by the Expo app: lesson-{lessonId}-{userId}
    lessonId format: {lang}-{unit}-{lesson}  e.g. es-1-1, fr-2-3, ja-1-5
    """
    parts = call_id.split("-")
    # parts: ["lesson", "<lang>", "<unit>", "<lesson>", *<userId parts>]
    lang_code = parts[1] if len(parts) > 1 else "es"
    return LANGUAGE_NAMES.get(lang_code, "your selected language")


async def join_call(agent: Agent, call_type: str, call_id: str, **kwargs) -> None:
    language_code: str = kwargs.get("language") or ""
    language_name = LANGUAGE_NAMES.get(language_code) or _language_from_call_id(call_id)
    intro_message: str | None = kwargs.get("intro_message")
    topic: str = kwargs.get("topic") or f"{language_name} language learning"

    call = await agent.create_call(call_type, call_id)

    async with agent.join(call):
        if intro_message:
            await agent.simple_response(
                f"The student has joined. Deliver this introduction: \"{intro_message}\" "
                f"Then immediately begin teaching the first item for today's topic: {topic}."
            )
        else:
            await agent.simple_response(
                f"The student has just joined the lesson. They are learning {language_name}. "
                "Greet them warmly as Lingo, state the language you will be teaching, "
                "and begin the lesson immediately with the first vocabulary item."
            )
        await agent.finish()


# ── Entry point ───────────────────────────────────────────────────────────────

if __name__ == "__main__":
    Runner(AgentLauncher(create_agent=create_agent, join_call=join_call)).cli()
