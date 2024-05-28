import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	base: "https://files.tago.io/623ebdf2635026001159d48e/storage/custom-widgets/test/",
});
