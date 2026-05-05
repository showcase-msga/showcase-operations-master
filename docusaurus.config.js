// @ts-check
// Docusaurus config for Showcase Operations Master
// Docs: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Showcase Operations Master',
  tagline: 'Project knowledge base for Showcase Tech Ops',
  favicon: 'img/favicon.ico',

  // Site URL: this is where the site will be hosted
  url: 'https://showcase-msga.github.io',
  // baseUrl: must match your repo name with leading and trailing slashes
  baseUrl: '/showcase-operations-master/',

  // GitHub Pages deployment config
  organizationName: 'showcase-msga', // GitHub org or username
  projectName: 'showcase-operations-master', // Repo name
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
          // Set the docs as the root of the site (no /docs prefix in URLs)
          routeBasePath: '/',
          // Hide "Edit this page" links (you edit in Obsidian, not GitHub UI)
          editUrl: undefined,
        },
        blog: false, // No blog needed
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with project social card later if you want
      image: 'img/social-card.png',
      navbar: {
        title: 'Showcase Ops',
        logo: {
          alt: 'Showcase Ops Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'projectsSidebar',
            position: 'left',
            label: 'Projects',
          },
          {
            href: 'https://github.com/showcase-msga/showcase-operations-master',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} AD Group — Showcase Tech Ops. Internal use only.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
