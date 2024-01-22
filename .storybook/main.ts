const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-actions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  webpackFinal: async config => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions
      })
    ];
    config.resolve.extensions.push('.ts', '.tsx', '.md', '.scss');
    return config;
  },
  docs: {
    autodocs: true
  }
};
