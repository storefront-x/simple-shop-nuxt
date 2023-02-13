import MAGENTO_URL from './config/MAGENTO_URL'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo'],

  apollo: {
    clients: {
      default: {
        httpEndpoint: MAGENTO_URL + '/graphql',
        browserHttpEndpoint: '/graphql',
        httpLinkOptions: {
          useGETForQueries: true,
        },
      },
    },
  },
})
