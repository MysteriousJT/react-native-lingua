export const colors = {
  primary: {
    linguaPurple: "#6c4ef5",
    linguaDeepPurple: "#5b3bf6",
    linguaBlue: "#4d88ff",
    linguaGreen: "#21c16b",
  },
  semantic: {
    success: "#21c16b",
    warning: "#ffcb00",
    streak: "#ff8a00",
    error: "#ff4d4f",
    info: "#4d88ff",
  },
  neutral: {
    ink: "#001132",
    muted: "#6b7280",
    divider: "#e5e7eb",
    surface: "#f6f7fb",
    canvas: "#ffffff",
  },
} as const;

export const fonts = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export const typography = {
  h1: {
    fontFamily: fonts.bold,
    fontSize: 32,
    lineHeight: 38,
  },
  h2: {
    fontFamily: fonts.semiBold,
    fontSize: 24,
    lineHeight: 31,
  },
  h3: {
    fontFamily: fonts.semiBold,
    fontSize: 20,
    lineHeight: 26,
  },
  h4: {
    fontFamily: fonts.medium,
    fontSize: 16,
    lineHeight: 22,
  },
  bodyLarge: {
    fontFamily: fonts.regular,
    fontSize: 16,
    lineHeight: 26,
  },
  bodyMedium: {
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 22,
  },
  bodySmall: {
    fontFamily: fonts.regular,
    fontSize: 13,
    lineHeight: 21,
  },
  caption: {
    fontFamily: fonts.regular,
    fontSize: 11,
    lineHeight: 15,
  },
} as const;
