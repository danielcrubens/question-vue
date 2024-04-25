// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
/*     "@nuxt/ui" */
  ],
  colorMode: {
    classSuffix: '',    
},
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