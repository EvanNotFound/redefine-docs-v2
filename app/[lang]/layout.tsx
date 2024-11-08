/* eslint-env node */
import { RedefineIcon, VercelIcon } from "@app/_icons";
import type { Metadata } from "next";
import {
	Footer,
	LastUpdated,
	Layout,
	Link,
	LocaleSwitch,
	Navbar,
} from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { getDictionary, getDirection } from "../_dictionaries/get-dictionary";
import { pageMap as graphqlEslintPageMap } from "./remote/graphql-eslint/[[...slug]]/page";
import { pageMap as graphqlYogaPageMap } from "./remote/graphql-yoga/[[...slug]]/page";
import "./styles.css";
import "../_components/features.css";
import Image from "next/image";
import { PromoCard } from "@app/_components/promo-card";

export const { viewport } = Head;

export const metadata: Metadata = {
	description:
		"Hexo Theme Redefine 官方文档。Redefine 是一款简洁，快速，纯净的 Hexo 主题。简洁，但不简单。",
	title: {
		absolute: "",
		template: "%s | Hexo Theme Redefine Docs",
	},
	metadataBase: new URL("https://redefine-docs.ohevan.com"),
	openGraph: {
		images: "https://assets.ohevan.com/img/11eb7c9cabf63d20c29e969111c6d4c5.png",
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

export default async function RootLayout({ children, params }) {
	const { lang } = await params;
	const dictionary = await getDictionary(lang);
	let pageMap = await getPageMap(lang);

	const [remoteItem] = graphqlEslintPageMap;

	if (lang === "en") {
		pageMap = [
			...pageMap,
			{
				...remoteItem,
				children: [
					...remoteItem.children,
					...graphqlYogaPageMap[0].children,
				],
			},
		];
	}
	const navbar = (
		<Navbar
			logo={
				<>
					<RedefineIcon height="16" width="16" />
					<span
						className="max-md:hidden select-none font-extrabold ms-2"
						title={`Theme Redefine Docs: ${dictionary.logo.title}`}
					>
						Theme Redefine Docs
					</span>
				</>
			}
			projectLink="https://github.com/evannotfound/hexo-theme-redefine"
		>
			<LocaleSwitch />
		</Navbar>
	);
	const footer = (
		<Footer>
			<a
				rel="noreferrer"
				target="_blank"
				className="focus-visible:nextra-focus flex items-center gap-2 font-medium w-full justify-between"
				href={dictionary.link.vercel}
			>
				<p>
					2024 © <a href="https://evannotfound.com">Evan Luo</a>
				</p>
				<a
					href="https://github.com/evannotfound/redefine-docs-v2"
					className="flex items-center gap-2"
				>
					made with ❤️ using <a href="https://nextra.site">Nextra</a>
				</a>
			</a>
		</Footer>
	);
	return (
		<html lang={lang} dir={getDirection(lang)} suppressHydrationWarning>
			<Head
				// backgroundColor={{
				//   dark: 'rgb(15,23,42)',
				//   light: 'rgb(254, 252, 232)'
				// }}
				color={{
					hue: { dark: 10, light: 0 },
					saturation: { dark: 100, light: 100 },
				}}
			/>
			<body>
				<Layout
					navbar={navbar}
					footer={footer}
					docsRepositoryBase="https://github.com/evannotfound/redefine-docs-v2/blob/main"
					i18n={[
						{ locale: "en", name: "English" },
						{ locale: "zh", name: "简体中文" },
					]}
					sidebar={{
						defaultMenuCollapseLevel: 1,
						autoCollapse: true,
					}}
					toc={{
						backToTop: dictionary.backToTop,
						extraContent: <PromoCard />,
					}}
					editLink={dictionary.editPage}
					pageMap={pageMap}
					nextThemes={{ defaultTheme: "dark" }}
					lastUpdated={
						<LastUpdated>{dictionary.lastUpdated}</LastUpdated>
					}
					themeSwitch={{
						dark: dictionary.dark,
						light: dictionary.light,
						system: dictionary.system,
					}}
				>
					{children}
				</Layout>
			</body>
		</html>
	);
}
