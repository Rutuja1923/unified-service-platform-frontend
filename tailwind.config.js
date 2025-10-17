export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          // dark: "var(--primary-dark)",
          // light: "var(--primary-light)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
          // dark: "var(--secondary-dark)",
          // light: "var(--secondary-light)",
        },
      },
      keyframes: {
        fadeSlideIn: {
          "0%": { opacity: 0, transform: "translateX(1rem)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeSlideUp: {
          "0%": { opacity: 0, transform: "translateY(1rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        progressShrink: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
      },
      animation: {
        "fade-in-slide": "fadeSlideIn 0.3s ease-out forwards",
        "fade-in-up": "fadeSlideUp 0.3s ease-out forwards",
        progress: "progressShrink 4s ease-out forwards",
      },
    },
  },
};
