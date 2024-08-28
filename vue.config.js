const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: config => {
    // Clear existing SVG rule to add custom loader
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();

    // Add vue-svg-loader with SVGO options
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .tap(options => ({
        // Ensure viewBox and other critical attributes are preserved
        svgo: {
          plugins: [
            { removeViewBox: false },
            { cleanupIDs: false },
            { removeDimensions: false },
          ],
        },
      }));
  },
});