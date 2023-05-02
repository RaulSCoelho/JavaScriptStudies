/** @type {import('tailwindcss').Config} */

function withColorEffect(variableName) {
  return ({ opacity, brightness }) => {
    let color = `rgb(var(${variableName}))`
    if (opacity !== undefined) {
      color = `rgba(var(${variableName}), ${opacity})`
    }
    if (brightness !== undefined) {
      color = `${color} brightness(${brightness})`
    }
    return color
  }
}

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: withColorEffect('--color-text-base'),
          muted: withColorEffect('--color-text-muted'),
          inverted: withColorEffect('--color-text-inverted')
        }
      },
      backgroundColor: {
        skin: {
          fill: withColorEffect('--color-fill'),
          'fill-primary': withColorEffect('--color-fill-primary'),
          'fill-secundary': withColorEffect('--color-fill-secundary'),
          button: withColorEffect('--color-button'),
          'button-hover': withColorEffect('--color-button-hover')
        }
      },
      gradientColorStops: {
        skin: {
          hue: withColorEffect('--color-fill')
        }
      }
    }
  },
  plugins: []
}
