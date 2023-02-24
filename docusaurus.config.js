// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
;


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Decentralized Identity',
  titleDelimiter:'Frictionless, Secure, and Trustworthy',
  tagline: 'Prevent frauds, optimize processes and drive sustainability,with EarthID’s award-winning decentralized identity and verifiable credentials platform.',
  favicon: '/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: '/img/earthid-logo.png',
      navbar: {
        style: 'dark',
        // title: 'EarthID',
        logo: {
          alt: 'My Site Logo',
          src: '/img/earthid-logo.png',
        },

        
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'EarthiD SDK',
          },
        //   {
        //     type: 'doc',
        //     docId: 'intro',
        //     position: 'left',
        //     label: 'Blogsss',
        //   },
        //   {to: '/blog', 
        //   label: 'Blog', 
        //   position: 'left'
        // },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        
        style: 'dark',
        links: [
          {
            // title: '',            
          },
          {
            title: 'Useful links ',
            items: [
              {
                label: 'Home',
                to: 'https://www.myearth.id/',
              },
              {
                label: 'Solutions',
                to: 'https://www.myearth.id/solution/products',
              },
              {
                label: 'Events',
                to: 'https://www.myearth.id/resources/webinars',
              },
              {
                label: 'About',
                to: 'https://www.myearth.id/about/company',
              },
              {
                label: 'Blogs',
                to: 'https://www.myearth.id/resources/blogs',
              },
            ],
            
          },
          {
            title: 'Connect With Us',
            items: [
              {
                label: 'Twitter',                
                href: 'https://twitter.com/earthid_ssi',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/myearth.id/',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCaRjLyN4I_0UrK3NL4zU1Vg',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/myearthid/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/myearthid/',
              },
              {
                label: 'Mail',
                href: 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=future@myearth.id',
              },
            ],
          },
          {
            title: 'Others',
            items: [
              {
                label: 'Privacy Policy',
                to: 'https://www.myearth.id/privacy',
                // logo: {
                //   alt: 'EarthID',
                //   src: 'img/logo.svg',
                //   href: 'https://opensource.fb.com',
                //   width: 160,
                //   height: 50,
                // }
              },
              {
                label: 'App Download',
                href: '/',
              },
            ],
          },
        ],
        logo: {
          alt: 'EarthID',
          src: 'img/earthid-logo.png',
          href: 'https://www.myearth.id/',
          width: 160,
          height: 45,
        },
        copyright: `Copyright © All Rights Reserved By EarthId`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
