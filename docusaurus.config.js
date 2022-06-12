// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "tew",
  tagline: "to prepare for some purpose",
  url: "https://kimjngyun.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "kimjngyun", // Usually your GitHub org/user name.
  projectName: "kimjngyun.github.io", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: "blog",
          blogTitle: "tew",
          blogDescription: "blog",
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          blogSidebarTitle: "최근 포스트",
          blogSidebarCount: 0,
          blogListComponent: "@theme/BlogListPage",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-BYCJ5ET6ZH",
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "tew",
        items: [
          {
            to: "/blog/tags",
            activeBasePath: "/tags",
            label: "tags",
            position: "right",
          },
          {
            to: "/blog/archive",
            activeBasePath: "/archive",
            label: "archive",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "More",
            items: [
              {
                label: "Naver Blog",
                to: "https://blog.naver.com/sanbada79",
              },
              {
                label: "GitHub",
                href: "https://github.com/kimjngyun",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The blog named tew. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
