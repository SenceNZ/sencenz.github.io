// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                privacy: resolve(__dirname, "privacy.html"),
                terms: resolve(__dirname, "terms.html"),
                creators: resolve(__dirname, "creators.html"),
                "creator-agency": resolve(__dirname, "creator-agency.html"),
            },
        },
    },
});
