import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Smswithoutborders Projects >> Documentation",
  tagline: "Stay connected",
  favicon: "favicon.ico",
  url: "https://docs.smswithoutborders.com",
  baseUrl: "/",
  organizationName: "SMSWithoutBorders",
  projectName: "documentation",
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "fa", "es"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        calendar: "gregory",
        path: "en"
      },
      fr: {
        label: "French",
        direction: "ltr",
        htmlLang: "fr-FR",
        calendar: "gregory",
        path: "fr"
      },
      fa: {
        label: "فارسی",
        direction: "rtl",
        htmlLang: "fa-IR",
        calendar: "persian",
        path: "fa"
      },
      es: {
        label: "Español",
        direction: "ltr",
        htmlLang: "es-ES",
        calendar: "gregory",
        path: "es"
      }
    }
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl:
            "https://github.com/smswithoutborders/smswithoutborders.github.io/tree/main/"
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/smswithoutborders/smswithoutborders.github.io/tree/main/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: "SWOB",
        src: "SWOB.png",
        srcDark: "SWOB-Dark Theme.png",
      },

      items: [
        {
          label: "Docs",
          position: "left",
          to: "/docs/Android Tutorial/Getting-Started-With-Android",
        },

        {
          label: "Tutorials",
          position: "left",
          items: [
            {
              label: "Get Started withAndroid",
              to: "/docs/Android Tutorial/Getting-Started-With-Android",
            },
            {
              label: "Get Started with iOS",
              to: "/docs/iOS Tutorial/Getting-Started-With-iOS",
            },
            {
              label: "Routing Number Guide",
              to: "/docs/Gateway Clients Guide/GatewayClientsGuide",
            },
          ],
        },

      
        {
          label: "Troubleshooting",
          position: "left",
          to: "/docs/Troubleshooting/Troubleshooting-FAQ",
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
      title: "Documentation",
      items: [
        {
          label: "Getting Started",
          to: "/docs/Android Tutorial/Getting-Started-With-Android",
        },
        {
          label: "Routing Number",
          to: "/docs/Gateway Clients Guide/GatewayClientsGuide",
        },
        {
          label: "Troubleshooting",
          to: "/docs/Troubleshooting/Troubleshooting-FAQ",
        },
      ],
    },

    {
      title: "Community",
      items: [
        {
          label: "GitHub",
          href: "https://github.com/smswithoutborders",
        },
        {
          label: "Issues",
          href: "https://github.com/smswithoutborders",
        },
        {
          label: "Blog",
          href: "https://blog.smswithoutborders.com",
        },
      ],
    },

    {
      title: "About",
      items: [
        {
          label: "Project",
          href: "https://smswithoutborders.com",
        },
        {
          label: "Contribute",
          href: "https://github.com/smswithoutborders",
        },
      ],
    },
  ],

  copyright: `SWOB — Smswithoutborders © ${new Date().getFullYear()}`,
},

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    typography: {
      fontFamily: "'Mona Sans', system-ui, sans-serif",
    },

  }
};

export default config;
