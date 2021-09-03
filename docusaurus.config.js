module.exports = {
  title: 'Legion Studios',
  tagline: 'Hello There 👋! .',

  url: 'https://github.com/Legion-Studios/Legion-Docs', // Your website URL
  baseUrl: '/Legion-Docs/',
  projectName: 'Legion-Docs',
  organizationName: 'Legion-Studios',
  onBrokenLinks: 'warn',

  favicon: 'img/LS.ico',
  themeConfig: {
    // defaultDarkMode: true,
    // disableDarkMode: true,
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    navbar: {
      title: 'Information',
      logo: {
        alt: 'Doc Logo',
        src: 'img/LS.ico',
      },
      items: [
        {
          to: 'docs/index',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {to: 'blog', label: 'Dev Blog', position: 'left'},
        {
          href: 'https://discord.com/invite/eWz2xPXdeq',
          label: 'Join our Discord!',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Information',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Documentation',
              to: 'docs/index/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/eWz2xPXdeq',
            },
            {
              label: 'Steam Workshop',
              href: 'https://steamcommunity.com/id/LSDevAccount/myworkshopfiles/',
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
              label: 'From Namenai w/ Love',
              href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Legion Studios`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  
};
