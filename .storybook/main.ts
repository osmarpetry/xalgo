const path = require('node:path')

module.exports = {
  framework: '@storybook/nextjs-vite',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-docs'],

  viteFinal: async (config) => {
    config.resolve ??= {}
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      styles: path.resolve(process.cwd(), 'src/styles'),
    }

    return config
  },

  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
