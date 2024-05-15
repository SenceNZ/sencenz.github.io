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
                "social-agency": resolve(__dirname, "social-agency.html"),
                "creator-agency": resolve(__dirname, "creator-agency.html"),
                "karori-dairy": resolve(__dirname, "karori-dairy.html"),
            },
        },
    },
});
