module.exports = {
  title: 'EKFocus',
  tagline: 'Eternal Kingdom Focus',
  url: 'https://ekfocus.com',
  baseUrl: '/',
  favicon: 'img/navigation-line.png',
  organizationName: 'jag3773', // Usually your GitHub org/user name.
  projectName: 'ekfocus', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
    },
    announcementBar: {
      id: 'support_us',
      content:
        'Test Announcement <a target="_blank" rel="noopener noreferrer" href="#">survey</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Home',
        src: 'img/home-smile-line.svg',
      },
      links: [
        {
          to: 'docs/doc1',
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
              label: 'Aramaic',
              to: 'docs/aramaic',
            },
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
        pages: {
          path: 'src/pages',
          routeBasePath: '',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          remarkPlugins: [],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
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
