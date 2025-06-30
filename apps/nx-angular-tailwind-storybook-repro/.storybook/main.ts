import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from '@storybook/angular';

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: ['../src/app/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-docs")],
  env: (config) => ({
    ...config,
    NODE_ENV: 'development',
  }),
  framework: {
    name: getAbsolutePath("@storybook/angular"),
    options: {},
  },
  docs: {
    defaultName: 'Docs'
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

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
