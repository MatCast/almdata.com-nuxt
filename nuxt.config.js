export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // enviroemntal variables
  env: {
    perPage: 5,
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate(titleChunk) {
      return titleChunk ? `${titleChunk} - almdata.com` : 'almdata.com'
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Machine Learning Solutions for Businesses. Use your data to the full power.',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/styles/styles.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/empty_object.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    styleResources: {
      scss: './assets/styles/styles.scss',
    },
  },
}
