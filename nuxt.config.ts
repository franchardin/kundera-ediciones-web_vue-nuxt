// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/css/main.sass',
    '~/assets/css/main.css'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "~/assets/css/_colors.sass" as *\n'
        }
      }
    }
  }
})
