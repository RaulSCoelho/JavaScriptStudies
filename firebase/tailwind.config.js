/** @type {import('tailwindcss').Config} */

function withColorEffect(variableName) {
  return ({ opacity, brightness }) => {
    let color = `rgb(var(${variableName}))`;
    if (opacity !== undefined) {
      color = `rgba(var(${variableName}), ${opacity})`;
    }
    if (brightness !== undefined) {
      color += ` brightness(${brightness})`;
    }
    return color;
  };
}

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: withColorEffect("--color-text-base"),
          muted: withColorEffect("--color-text-muted"),
          inverted: withColorEffect("--color-text-inverted")
        }
      },
      backgroundColor: {
        skin: {
          fill: withColorEffect("--color-fill"),
          "fill-primary": withColorEffect("--color-fill-primary"),
          "fill-secondary": withColorEffect("--color-fill-secondary"),
          card: withColorEffect("--color-card"),
          button: withColorEffect("--color-button"),
          "button-hover": withColorEffect("--color-button-hover")
        }
      }
    }
  },
  plugins: [require("tailwind-scrollbar")]
};
