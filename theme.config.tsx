import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/EvanNotFound/hexo-theme-redefine',
  },
  docsRepositoryBase: 'https://github.com/EvanNotFound/hexo-theme-redefine/tree/main/',
  footer: {
    text: '2023 © EvanNotFound',
  },
  i18n: [
    { locale: 'zh', text: '中文' },
    { locale: 'en', text: 'English' }
  ],
  navigation: {
    prev: true,
    next: true
  }
}

export default config
