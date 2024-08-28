const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  module: {
    rules: [
        {
            test: /\.svg$/,
            use: [
                {
                    loader: 'svg-url-loader',
                    options: {
                        limit: 10000,
                        noquotes: true,
                    },
                },
                {
                    loader: 'svgo-loader',
                    options: {
                        plugins: [
                            { removeViewBox: false },
                            { cleanupIDs: false },
                            { removeDimensions: false },
                        ],
                    },
                },
            ],
        },
    ],
},
})
