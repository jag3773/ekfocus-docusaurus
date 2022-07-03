module.exports = {
  title: 'EKFocus',
  tagline: 'Eternal Kingdom Focus',
  url: 'https://ekfocus.com',
  baseUrl: '/',
  favicon: 'img/ekfocus_logo.png',
  organizationName: 'jag3773', // Usually your GitHub org/user name.
  projectName: 'ekfocus', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
    },
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Home',
        src: 'img/ekfocus_logo.png',
      },
      links: [
        {
          to: 'docs/greek',
          activeBasePath: 'docs',
          label: 'Docs',
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
          title: 'Docs',
          items: [
            {
              label: 'Bible',
              to: 'docs/bible',
            },
            {
              label: 'Greek',
              to: 'docs/greek',
            },
            {
              label: 'Hebrew',
              to: 'docs/hebrew',
            },
            {
              label: 'Helpful Sites',
              to: 'docs/helpful-sites',
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
              label: 'Keybase',
              href: 'https://keybase.io/jag3773/',
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
            'https://github.com/jag3773/ekfocus/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/jag3773/ekfocus/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
        },
      },
    ],
  ],
};
