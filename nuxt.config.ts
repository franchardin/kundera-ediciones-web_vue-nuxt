export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.sass", "~/assets/css/main.css"],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "~/assets/css/_colors.sass" as *\n',
        },
      },
    },
  },
  generate: {
    routes: ["/perfil/camila", "/perfil/cintia", "/perfil/lucia"],
  },
})
