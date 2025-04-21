// postcss.config.mjs
import autoprefixer from "autoprefixer";

export default {
  plugins: {
    "@tailwindcss/postcss": {}, // ← こちらを新パッケージで
    autoprefixer: {},
  },
};
