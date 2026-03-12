export default defineNuxtConfig({

  modules: ['@nuxtjs/tailwindcss'],

  compatibilityDate: '2026-03-12',

  devServer:{
    port:3000
  },

  runtimeConfig:{
    public:{
      apiBase:'http://localhost:5000'
    }
  }

})