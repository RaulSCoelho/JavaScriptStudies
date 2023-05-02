function toColor(variable: string) {
  return `rgb(var(${variable}))`
}

export const colors = {
  fill: toColor('--color-fill'),
  fillPrimary: toColor('--color-fill-primary'),
  fillSecundary: toColor('--color-secundary'),
  textBase: toColor('--color-text-base'),
  textMuted: toColor('--color-text-muted'),
  textInverted: toColor('--color-text-inverted'),
  button: toColor('--color-button'),
  buttonHover: toColor('--color-button-hover')
}
