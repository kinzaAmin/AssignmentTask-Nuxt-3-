// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      // meta: [
      //   // <meta name="viewport" content="width=device-width, initial-scale=1">
      //   { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      // ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'stylesheet', href: 'css/style.css' }
      ],
    }
  }
})
