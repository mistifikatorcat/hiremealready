module.exports = {
    content: ["./app/**/*.{ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#8C5AE8",
          backgroundLight: "#F9F9F9",
          backgroundDark: "#121212",
        },
        fontFamily: {
            heading: ['var(--font-heading)', 'sans-serif'],
            body: ['var(--font-body)', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  