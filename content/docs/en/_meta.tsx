import { RedefineIcon } from "obsolete/app/_icons";
import type { FC, ReactNode } from "react";

export const Separator: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className="flex items-center gap-2">
			<RedefineIcon className="shrink-0" height={13} width={13} />
			{children}
		</div>
	);
};

export default {
	introduction: "Theme Introduction",
	"getting-started": "Getting Started",
	_: {
		title: <Separator>Configuration</Separator>,
		type: "separator",
	},
	basic: "Basic",
	home: "Home",
	posts: "Posts",
	footer: "Footer",
	_2: {
		title: <Separator>Usage</Separator>,
		type: "separator",
	},
	page_templates: "Page Templates",
	modules: "Writing Modules",
	plugins: "Plugins",
	shuoshuo: "Shuoshuo",
	article_customize: "Article Customization",
	inject: "Insert Custom Code",
	cdn: "CDN Acceleration",
	tips: "Writing Guidelines",
	language: "Language Settings",
	_3: {
		title: <Separator>More</Separator>,
		type: "separator",
	},
	thanks: "Acknowledgements",
	developer: "Developer",
	migrate: "Migration from v1",

	index: {
		type: "page",
		display: "hidden",
		theme: {
			layout: "full",
		},
	},
	about_link: {
		title: "Blog",
		href: "https://ohevan.com",
		type: "page",
	},
	demo_link: {
		title: "Demo Site",
		type: "page",
		href: "https://redefine.ohevan.com/",
	},
};
