import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  astro: true,
  formatters: {
    astro: true,
    css: true,
    html: true,
    markdown: true,
  },
  rules: {
    'eol-last': ['error', 'always'],
    'style/eol-last': ['error', 'always'], // 针对 @stylistic/eslint-plugin
  },
})
