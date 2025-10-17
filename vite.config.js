import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@api": path.resolve(__dirname, "./src/api"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@contexts": path.resolve(__dirname, "./src/contexts"),
        "@constants": path.resolve(__dirname, "./src/constants"),
        "@features": path.resolve(__dirname, "./src/features"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@layouts": path.resolve(__dirname, "./src/layouts"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@routes": path.resolve(__dirname, "./src/routes"),
        "@services": path.resolve(__dirname, "./src/services"),
        "@stores": path.resolve(__dirname, "./src/stores"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@utils": path.resolve(__dirname, "./src/utils"),
        "@images": path.resolve(__dirname, "./src/assets/images"),
        "@ui": path.resolve(__dirname, "./src/components/ui"),
        "@custom-ui": path.resolve(__dirname, "./src/components/custom-ui"),
      },
    },
    assetsInclude: ["**/*.ttf", "**/*.woff", "**/*.woff2", "**/*.otf"],
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const extType = assetInfo.name.split(".").pop();
            if (/ttf|woff|woff2|otf/.test(extType)) {
              return `assets/fonts/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
        },
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
      "process.env": {
        NODE_ENV: JSON.stringify(env.NODE_ENV || mode),
      },
    },
  };
});
