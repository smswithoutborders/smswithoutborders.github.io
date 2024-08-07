import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SMSWithoutBorders >> Documentation",
  tagline: "Stay connected",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.smswithoutborders.com",
  baseUrl: "/",
  organizationName: "smswithoutborders", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "fa"],
    path: "i18n",
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        calendar: "gregory",
        path: "en",
      },
      fr: {
        label: "French",
        direction: "ltr",
        htmlLang: "fr-FR",
        calendar: "gregory",
        path: "fr",
      },
      fa: {
        label: "فارسی",
        direction: "rtl",
        htmlLang: "fa-IR",
        calendar: "persian",
        path: "fa",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/smswithoutborders/smswithoutborders.github.io/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/smswithoutborders/smswithoutborders.github.io/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: "SMSWithoutBorders",
        logo: {
          alt: "SMSwithoutborders logo",
          src: "img/logo-icon-light.png",
        },
        items: [
          {
            type: "doc",
            docId: "contributing/introduction",
            position: "left",
            label: "Docs",
          },
          {
            type: "doc",
            docId: "tutorials/getting-started",
            position: "left",
            label: "Tutorials",
          },
          {
            type: "doc",
            docId: "SWOB Account Management/Account Management",
            position: "left",
            label: "SWOB Account Management",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/smswithoutborders",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorials",
                to: "/docs/tutorials/getting-started",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "IRC: freenode/#afkanerd",
                href: "#",
              },
              {
                label: "GitHub",
                href: "https://github.com/smswithoutborders",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://blog.smswithoutborders.com",
              },
              {
                label: "FaceBook",
                href: "https://www.facebook.com/SMSWithoutBorders",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@smswithoutborders9162",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SMSWithoutBorders. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
