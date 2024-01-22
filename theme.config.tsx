import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
  <>
    <img src="https://evan.beee.top/projects/hexo-theme-redefine/statics/logos/logo.webp" style={{width: "40px"}} alt="logo" />
    <span style={{letterSpacing:"-1px", marginLeft:"0.4rem", fontWeight: 700 , fontSize: "1.8rem", color: "#545759"}}>
      Redefine
    </span>
    <span style={{letterSpacing:"-1px",  marginLeft:"0.4rem", fontWeight: 700 , fontSize: "1.8rem", color: "#8A8B8C"}}>
      docs
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
      text: '2024 © EvanNotFound',
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
  primaryHue: {
    light: 10,
    dark: 16
  }
}

export default config
