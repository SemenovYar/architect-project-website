/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Architect-project',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'web-stap', // Usually your GitHub org/user name.
  projectName: 'Architect-project', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    navbar: {
      title: 'Architect-project',
      logo: {
        alt: 'Architect-project Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'changelog/',  activeBasePath: 'changelog', label: 'Changelog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram Семенов Ярослав',
              href: 'https://t.me/SemenovYar',
            },
            {
              label: 'Telegram Гончаров Тимофей',
              href: 'https://t.me/gtosss',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Changelog',
              to: 'changelog/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/GTOsss/architect-project',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Architect-project`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
              'https://github.com/GTOsss/architect-project',
        },
        changelog: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
              'https://github.com/GTOsss/architect-project',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
