module.exports = {
  title: 'EKFocus',
  tagline: 'Eternal Kingdom Focus',
  url: 'https://ekfocus.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'jag3773', // Usually your GitHub org/user name.
  projectName: 'ekfocus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Home',
        src: 'img/home-smile-line.svg',
      },
      links: [
        {
          to: 'pages/doc1',
          activeBasePath: 'pages',
          label: 'Pages',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/jag3773/ekfocus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Pages',
          items: [
            {
              label: 'Aramaic',
              to: 'pages/aramaic',
            },
            {
              label: 'Bible',
              to: 'pages/bible',
            },
            {
              label: 'Greek',
              to: 'pages/greek',
            },
            {
              label: 'Hebrew',
              to: 'pages/hebrew',
            },
            {
              label: 'Helpful Sites',
              to: 'pages/helpful-sites',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
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
              href: 'https://github.com/jag3773',
            },
            {
              label: 'unfoldingWord',
              href: 'https://www.unfoldingword.org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jesse Griffin. All original work licensed as <a href='https://creativecommons.org/licenses/by-sa/4.0/'>CC BY-SA 4.0</a>.`,
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
