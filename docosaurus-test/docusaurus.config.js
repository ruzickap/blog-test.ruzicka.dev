// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Petr\'s Blog',
  tagline: 'DevOps • SysAdmin • Photographer',
  url: 'https://blog-test.ruzicka.dev',
  baseUrl: '/docosaurus-test/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://raw.githubusercontent.com/cncf/artwork/40e2e8948509b40e4bad479446aaec18d6273bf2/projects/kubernetes/icon/color/kubernetes-icon-color.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ruzickap', // Usually your GitHub org/user name.
  projectName: 'blog-test.ruzicka.dev', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ruzickap/blog-test.ruzicka.dev/tree/main/docosaurus-test/',
          showLastUpdateTime: true,
        },
        blog: {
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/ruzickap/blog-test.ruzicka.dev/tree/main/docosaurus-test/',
        },
        gtag: {
          trackingID: 'G-2QMNQX8RNG',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'under_reconstruction',
        content: '⭐️ Under reconstruction ⭐️',
        isCloseable: true,
      },
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: true,
        title: 'Petr\'s Blog',
        logo: {
          src: 'https://raw.githubusercontent.com/cncf/artwork/40e2e8948509b40e4bad479446aaec18d6273bf2/projects/networkservicemesh/icon/color/networkservicemesh-icon-color-reversed.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          { to: "projects/", label: 'Projects', position: "right" },
          { to: "about/", label: "About", position: "right" },
          {
            href: 'https://github.com/ruzickap/blog-test.ruzicka.dev',
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© Petr Ruzicka ${new Date().getFullYear()} | Documentation Distributed under <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
