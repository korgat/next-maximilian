const path = require('path');

module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript-plugin',
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, './src'), 'node_modules'];
    config.resolve.alias['@components'] = path.join(__dirname, '../src/components');
    config.resolve.alias['@utils'] = path.join(__dirname, '../src/utils');
    config.resolve.alias['@store'] = path.join(__dirname, '../src/store');
    config.resolve.alias['@modules'] = path.join(__dirname, '../src/modules');
    config.resolve.alias['@api'] = path.join(__dirname, '../src/modules');
    config.resolve.alias['@lib'] = path.join(__dirname, '../src/lib');
    config.resolve.alias['@types'] = path.join(__dirname, '../src/types');
    config.resolve.alias['@hooks'] = path.join(__dirname, '../src/hooks');
    config.resolve.alias['@data'] = path.join(__dirname, '../src/data');
    config.resolve.alias['@config'] = path.join(__dirname, '../src/config');

    return config;
  },
};
