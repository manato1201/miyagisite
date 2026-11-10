import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    // Next 16 / React Compiler 系の新ルール。src/components/TransitionCanvas.tsx が描画中に ref を読む
    // 既存の書き方で 2 件に当たる。動作に関わるので書き換えは別途とし、それまでは警告に留める。
    rules: {
      "react-hooks/refs": "warn",
      "react-hooks/globals": "warn",
    },
  },
]);

export default eslintConfig;
