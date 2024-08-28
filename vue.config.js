const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: config => {
    // Clear existing SVG rule to add custom loader
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
  },
});