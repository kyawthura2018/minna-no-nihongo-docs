// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const config = {
  title: 'Minna no Nihongo N5 Notes',
  tagline: 'Japanese N5 Lessons with Vocabulary, Grammar, and Hiragana Readings',
  url: 'https://kyawthura2018.github.io',
  baseUrl: '/minna-no-nihongo-docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kyawthura2018', // GitHub org/user name.
  projectName: 'minna-no-nihongo-docs', // Repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/kyawthura2018/minna-no-nihongo-docs/edit/main/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};

module.exports = config;