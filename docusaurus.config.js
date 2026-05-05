// @ts-check
// Docusaurus config for Showcase Operations Master
// Brand-aligned with showcase.space / ad-group.com.au design language

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'showcase ops',
  tagline: 'internal knowledge base for showcase tech ops',
  favicon: 'img/favicon.svg',

  url: 'https://showcase-msga.github.io',
  baseUrl: '/showcase-operations-master/',

  organizationName: 'showcase-msga',
  projectName: 'showcase-operations-master',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      navbar: {
        title: '',
        logo: {
          alt: 'showcase',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
          width: 140,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'projectsSidebar',
            position: 'left',
            label: 'projects',
          },
          {
            href: 'https://github.com/showcase-msga/showcase-operations-master',
            label: 'github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `© ${new Date().getFullYear()} AD Group · Showcase Tech Ops · Internal Use Only`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
    }),
};

export default config;
