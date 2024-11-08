import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Hexo Theme Redefine Docs",
		short_name: "Hexo Theme Redefine Docs",
		icons: [
			{
				src: "https://assets.ohevan.com/projects/hexo-theme-redefine/favicon/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "https://assets.ohevan.com/projects/hexo-theme-redefine/favicon/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
		theme_color: "#fff",
		background_color: "#fff",
		display: "standalone",
	};
}
