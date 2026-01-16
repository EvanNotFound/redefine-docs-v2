import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { defineI18nUI } from 'fumadocs-ui/i18n';
import { i18n } from '@/lib/i18n';

const { provider } = defineI18nUI(i18n, {
  translations: {
    en: {
      displayName: 'English',
    },
    zh: {
      displayName: '简体中文',
      search: '搜索文档',
    },
  },
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description:
    "Hexo Theme Redefine 官方文档。Redefine 是一款简洁，快速，纯净的 Hexo 主题。简洁，但不简单。",
  title: {
    absolute: "",
    template: "%s | Hexo Theme Redefine Docs",
  },
  metadataBase: new URL("https://redefine-docs.ohevan.com"),
  openGraph: {
    images:
      "https://assets.ohevan.com/img/11eb7c9cabf63d20c29e969111c6d4c5.png",
  },
  twitter: {
    site: "@vercel",
  },
  appleWebApp: {
    title: "Theme Redefine Docs",
  },
  other: {
    "msapplication-TileColor": "#fff",
  },
};

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const lang = (await params).lang;

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider i18n={provider(lang)}>{children}</RootProvider>
      </body>
    </html>
  );
}
