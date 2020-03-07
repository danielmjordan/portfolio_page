import { tailwind } from '@theme-ui/presets'

export default {
  ...tailwind,
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.gray[7],
    secondary: tailwind.colors.gray[4],
    tertiary: tailwind.colors.gray[2]
  },
  sizes: {
    ...tailwind.sizes,
    container: 1200
  },
  fonts: {
    ...tailwind.fonts,
    heading: `"PT serif", ${tailwind.fonts.sans}`,
    body: `"PT serif", ${tailwind.fonts.sans}`
  }
}