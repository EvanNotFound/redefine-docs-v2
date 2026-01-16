import meta from "../en/_meta";
import { Separator } from "../en/_meta";

export default {
  introduction: "主题介绍",
  "getting-started": "快速开始",
  _: {
    title: <Separator>配置</Separator>,
    type: "separator",
  },
  basic: "基本",
  home: "首页",
  posts: "文章",
  footer: "页脚",
  _2: {
    title: <Separator>使用</Separator>,
    type: "separator",
  },
  page_templates: "页面模板",
  modules: "写作模块",
  plugins: "插件",
  shuoshuo: "说说",
  article_customize: "文章自定义",
  inject: "插入自定义代码",
  cdn: "CDN 加速",
  tips: "写作指南",
  language: "语言设置",
  _3: {
    title: <Separator>更多</Separator>,
    type: "separator",
  },
  thanks: "致谢",
  developer: "主题开发指南",
  migrate: "从 v1 迁移",

  index: meta.index,
  contact_link: {
    title: "联系作者",
    type: "page",
    href: "mailto:contact@ohevan.com",
  },
  about_link: {
    ...meta.about_link,
    title: "博客",
  },
  demo_link: {
    ...meta.demo_link,
    title: "演示站点",
  },
};
