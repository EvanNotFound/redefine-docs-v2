import EnIndex from "@components/index-page/en-index";
import ZhIndex from "@components/index-page/zh-index";

const LANGUAGES = [
  { lang: "en", name: "English" },
  { lang: "de", name: "Deutsch" },
  { lang: "ja", name: "日本語" },
];

export async function IndexPage({ params }) {
  const lang = params.lang || "zh";

  if (lang === "en") {
    return <EnIndex />;
  }

  return <ZhIndex />;
}
