module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
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
}
