/** @type {import('@docusaurus/types').DocusaurusConfig} */
const path = require('path');
module.exports = {
  title: 'Jarbird Gradle Plugin',
  tagline: 'Publishing Java components made easy',
  url: 'https://hkhc.github.io',
  baseUrl: '/jarbird/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hkhc', // Usually your GitHub org/user name.
  projectName: 'jarbird', // Usually your repo name.
  customFields: {
    image: '',
    keywords: [],
    jarbirdVersion: "0.5.4",
  },
  themeConfig: {
    navbar: {
      title: 'Jarbird',
      logo: {
        alt: 'Jarbird Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Introduction',
        },
        {
          type: 'doc',
          docId: 'tutorials/index',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'doc',
          docId: 'reference/index',
          position: 'left',
          label: 'Reference',
        },
        {
          type: 'doc',
          docId: 'create-account',
          position: 'left',
          label: 'Create Accounts',
        },
        {
          type: 'doc',
          docId: 'build',
          position: 'left',
          label: 'Build',
        },
        {
          href: 'https://github.com/hkhc/jarbird',
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
              label: 'Tutorial',
              to: 'docs/tutorials/index',
            },
            {
              label: 'Sample Code',
              href: 'https://github.com/hkhc/jarbird-samples',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'HKHC',
              href: 'https://hkhc.github.io',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/hkhc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HKHC. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['yaml', 'groovy', 'kotlin', 'shell-session', 'properties'],
      // Check custom.css for the style if line highlight
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/hkhc/jarbird-docs/',
          remarkPlugins: [
            [require(path.resolve(__dirname, './src/remarkPlugins/hkhc-remake-variables')), {
              dict: {
                'jarbirdVersion': '0.7.0'
              }
            }],
            require('remark-docusaurus-tabs')
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};
