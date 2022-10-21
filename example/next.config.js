const path = require('path')
const withTranslateRoutes = require('next-translate-routes/plugin')

const nextConfig = withTranslateRoutes({
  i18n: {
    locales: ['en', 'fr','de'],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'dev2.gindumac.com',
        defaultLocale: 'en',
      },
      {
        domain: 'dev2.gindumac.fr',
        defaultLocale: 'fr',
      },
      {
        domain: 'dev2.gindumac.de',
        defaultLocale: 'de',
      },
    ]
  },

  translateRoutes: {
    debug: true,
  },

  webpack(config) {
    // Needed to avoid conflicts between example's react and next-translate-routes react
    config.resolve.alias.react = path.resolve('../node_modules/react')
    return config
  },

  rewrites: async () => {
    return [
      {
        source: '/france/blog/documentation',
        destination: '/docs',
      },
    ]
  },
})

module.exports = nextConfig
