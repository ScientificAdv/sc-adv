export default {
    /*
     ** Headers of the page
     */
    head: {
        title: '科学ADV中文维基',
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
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/style-resources'],
    styleResources: {
        scss: '~/assets/styles/global/*.scss'
    },
    /*
     ** Build configuration
     */
    build: {
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
