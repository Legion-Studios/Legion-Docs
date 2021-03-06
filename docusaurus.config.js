module.exports = {
  title: 'Legion Studios Docs',
  tagline: 'Hello There 👋. Welcome to Legion Studios Doc site.',

  url: 'https://github.com/Legion-Studios/Legion-Docs', // Your website URL
  baseUrl: '/Legion-Docs/',
  projectName: 'Legion-Docs',
  organizationName: 'Legion-Studios',

  favicon: 'img/favicon.ico',
  themeConfig: {
    // defaultDarkMode: true,
    // disableDarkMode: true,
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    navbar: {
      title: 'LS Docs',
      logo: {
        alt: 'Doc Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/index',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'News', position: 'left'},
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Doc',
              to: 'docs/index/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Ur mom',
              href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/Wdrth6',
            },
            {
              label: 'Steam workShop',
              href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1656708630',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Legion-Studios',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Legion Studio, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  
};
