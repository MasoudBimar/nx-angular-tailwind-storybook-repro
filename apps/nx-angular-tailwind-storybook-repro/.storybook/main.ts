import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/app/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  env: (config) => ({
    ...config,
    NODE_ENV: 'development',
  }),
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    defaultName: 'Docs',
    autodocs: true,
  },
  previewHead: (head) => `
    ${head}
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  `,
  webpackFinal: async (config) => {
    // Ensure config.module exists
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    // Remove existing CSS rules to avoid conflicts
    config.module.rules = config.module.rules.filter(rule => {
      if (rule && typeof rule === 'object' && rule.test) {
        return !rule.test.toString().includes('.css');
      }
      return true;
    });

    // Add PostCSS loader for CSS files to process Tailwind
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                ['@tailwindcss/postcss', {}],
              ],
            },
          },
        },
      ],
    });

    // Add SCSS loader for Angular Material theme
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    });

    return config;
  },
  staticDirs: ['../public'],
};

export default config;
