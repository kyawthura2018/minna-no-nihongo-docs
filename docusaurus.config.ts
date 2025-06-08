module.exports = {
  title: 'Minna no Nihongo N5 Notes',
  url: 'https://minna-no-nihongo-docs.vercel.app', // or your custom Vercel domain
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'kyawthura2018',
  projectName: 'minna-no-nihongo-docs',
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};