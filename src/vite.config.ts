import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	base:'https://mellyzoo.github.io/notificadoresApp/',
	plugins: [
		react(),
		VitePWA({
			registerType: "autoUpdate",
			injectRegister: "script",
			devOptions: {
				enabled: true,
			},
			manifest: {
				short_name: "NOTI",
				name: "Notification App",
				description: "description",
				start_url: "/index.html",
				display: "standalone",
				scope: "/",
				icons: [
					{
						src: "home.png",
						sizes: "24x24",
						type: "image/png",
					},
					{
						src: "home(1).png",
						sizes: "32x32",
						type: "image/png",
					},
					{
						src: "home(2).png",
						sizes: "64x64",
						type: "image/png",
					},
					{
						src: "home(3).png",
						sizes: "128x128",
						type: "image/png",
					},
				],
				screenshots: [
					{
						src: "screenshot.jpg",
						sizes: "1080x2340",
						type: "image/jpg",
						form_factor: "wide",
					},
				],
				background_color: "#EEE",
				theme_color: "#1565c0",
				orientation: "portrait",
			},
			workbox: {
				globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
			},
		}),
	],
	build: {
		outDir: "dist",
	},
});
