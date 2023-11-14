const withNextra = require('nextra')({
  images: {
    domains: ['cdn.jsdelivr.net', 'github.com'],
  },
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  baseUrl: '/',
})

module.exports = withNextra({
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'zh'
  }
})
