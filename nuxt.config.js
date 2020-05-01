export default {
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s | 科学ADV中文Wiki',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/combine/npm/normalize.css@8.0.0/normalize.min.css,npm/bootstrap-css-only@4.1.3/css/bootstrap-grid.min.css' },
            { rel: 'stylesheet', href: '//at.alicdn.com/t/font_1478452_c6l3dd64sfi.css' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        { src: 'yue.css/yue.css', lang: 'css' },
        { src: '~/assets/styles/global/global.scss', lang: 'scss' }
    ],
    router: {
        middleware: ['meta'],
        base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/sc-adv/' : '/'
    },
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [{ src: '~/plugins/VueAffix.js', ssr: false }],
    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/style-resources'],
    /*
     ** Build configuration
     */
    build: {
        publicPath: 'https://cdn.jsdelivr.net/gh/ScientificAdv/sc-adv@gh-pages',
        extend(config, ctx) {
            if (ctx.isDev && ctx.client) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        plugins: []
    }
}
