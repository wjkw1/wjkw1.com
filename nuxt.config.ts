// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  mode: "static",
  router: {
    base: "/wjkw1.com/",
  },
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/test-utils/module",],

  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
