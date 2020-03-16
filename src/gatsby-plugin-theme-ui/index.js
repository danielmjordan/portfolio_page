import { tailwind } from '@theme-ui/presets'

export default {
  ...tailwind,
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.gray[7],
    secondary: tailwind.colors.orange[3],
    tertiary: tailwind.colors.gray[2]
  },
  sizes: {
    ...tailwind.sizes,
    container: 1200
  },
  fonts: {
    ...tailwind.fonts,
    heading: `"Open Sans", ${tailwind.fonts.sans}`,
    body: `"Open Sans", ${tailwind.fonts.sans}`
  }
}