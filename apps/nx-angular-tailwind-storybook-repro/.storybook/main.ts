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
  staticDirs: ['../public'],
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
