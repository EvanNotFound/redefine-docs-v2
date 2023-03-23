import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
  <>
    <img src="https://evan.beee.top/projects/hexo-theme-redefine/statics/logos/logo.webp" style={{width: "40px"}} alt="logo" />
    <span style={{ marginLeft: '.4em', fontWeight: 700 , fontSize: "1.6rem", color: "#545759"}}>
      Theme&nbsp;
    </span>
    <span style={{ fontWeight: 700 , fontSize: "1.6rem", color: "#545759"}}>
      R
    </span>
    <span style={{ fontWeight: 700 , fontSize: "1.6rem", color: "#A31F34"}}>
      e
    </span>
    <span style={{ fontWeight: 700 , fontSize: "1.6rem", color: "#545759"}}>
      define
    </span>
    <span style={{ fontWeight: 700 , fontSize: "1.6rem", color: "#8A8B8C"}}>
      &nbsp;Docs
    </span>
  </>
  ),
  project: {
    link: 'https://github.com/EvanNotFound/hexo-theme-redefine',
  },
  docsRepositoryBase: 'https://github.com/EvanNotFound/redefine-docs-v2/tree/main',
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
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  }
}

export default config
