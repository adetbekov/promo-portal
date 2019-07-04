const pkg = require('./package')
import webpack from 'webpack'
const nodeExternals = require("webpack-node-externals")

module.exports = {
    head: {
        title: 'promo-portal',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    loading: { color: '#3B8070' },
    styleResources: {
        scss: ['~/assets/styles/combine.sass']
    },
    plugins: [
        "~/plugins/axios",
        { src: "~/plugins/nuxt-client-init.js", ssr: false },
        '@/plugins/element-ui',
        { src: "~/plugins/maskedInput.js", ssr: false }
        // { src: "~/plugins/vue-glide.js", ssr: false }
    ],
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
        ["nuxt-i18n", require("./i18n/config")],
        "nuxt-mq"
    ],
    router: {
        // middleware: ["launched"]
    },
    mq: {
        defaultBreakpoint: 'default',
        breakpoints: {
            mobile: 450,
            tablet: 900,
            laptop: 1250,
            desktop: Infinity
        }

    },
    axios: {
        baseURL: "http://api.rglservice.kz/v2/190604120714",
        credentials: false
    },
    build: {
        plugins: [
            new webpack.ProvidePlugin({
                '_': 'lodash'
                    // ...etc.
            })
        ],
        // postcss: [
        //     require("postcss-nested")(),
        //     require("postcss-responsive-type")(),
        //     require("postcss-hexrgba")(),
        //     require("autoprefixer")()
        // ],
        vendor: ['axios'],
        extend(config, { isDev, isClient, isServer }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/,
                    options: {
                        fix: true
                    }
                }, {
                    resourceQuery: /blockType=i18n/,
                    type: 'javascript/auto',
                    loader: '@kazupon/vue-i18n-loader'
                })
            }

            if (isServer) {
                config.externals = [
                    nodeExternals({
                        whitelist: [
                            /es6-promise|\.(?!(?:js|json)$).{1,5}$/i,
                            /^vue-awesome/
                        ]
                    })
                ]
            }
        }
    }
}