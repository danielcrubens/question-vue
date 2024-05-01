// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-swiper',
  ],
  components:true,

  css: [
    'normalize.css/normalize.css',
    '@/assets/css/tailwind.css'
  ],
  googleFonts: {
    base64: true,
    fontsDir: 'assets/fonts',
    overwriting: true,
    families: {
      Inter: [400, 700],
    },
  },
})