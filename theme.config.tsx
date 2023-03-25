import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
  <>
    <img src="https://evan.beee.top/projects/hexo-theme-redefine/statics/logos/logo.webp" style={{width: "40px"}} alt="logo" />
    <span style={{ fontFamily:"Bebas Neue", marginLeft:"0.4rem", fontWeight: 700 , fontSize: "2rem", color: "#545759", transform: "translateY(2px)"}}>
      Redefine
    </span>
    <span style={{ fontFamily:"Bebas Neue", marginLeft:"0.1rem", fontWeight: 700 , fontSize: "1rem", color: "#8A8B8C",transform: "translateY(7px)"}}>
      &nbsp;Docs
    </span>
  </>
  ),
  head: (
    <>
      <link rel="apple-touch-icon" sizes="180x180" href="https://evan.beee.top/projects/hexo-theme-redefine/statics/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="https://evan.beee.top/projects/hexo-theme-redefine/statics/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="https://evan.beee.top/projects/hexo-theme-redefine/statics/favicon/favicon-16x16.png" />
      <link rel="manifest" href="https://evan.beee.top/projects/hexo-theme-redefine/statics/favicon/site.webmanifest" />
      <link rel="mask-icon" href="https://evan.beee.top/projects/hexo-theme-redefine/statics/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="https://evan.beee.top/projects/hexo-theme-redefine/statics/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="msapplication-config" content="https://evan.beee.top/projects/hexo-theme-redefine/statics/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </>
  ),
  project: {
    link: 'https://github.com/EvanNotFound/hexo-theme-redefine',
  },
  docsRepositoryBase: 'https://github.com/EvanNotFound/redefine-docs-v2/tree/main',
  footer: {
    text: <span>
      MIT {new Date().getFullYear()} © <a href="https://ohevan.com" target="_blank">EvanNotFound</a>
    </span>,
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
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Redefine Docs',
    }
  },
  banner: {
    key: '2.0-release',
    text: <a href="/migrate" target="_blank">
      🎉 你正在阅读 Redefine v2 文档，从 v1 迁移 →
    </a>,
  },
}

export default config
