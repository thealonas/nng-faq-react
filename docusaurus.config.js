// @ts-check

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'nng',
  tagline: 'Безымянные комментарии от имени групп',
  favicon: 'img/logo.svg',
  url: 'https://nng.alonas.lv',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  themes: ['@docusaurus/theme-mermaid'],
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru']
  },
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'admins',
          routeBasePath: 'admins',
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          blogTitle: 'Блог',
          blogSidebarTitle: 'Все посты',
          blogSidebarCount: 'ALL',
          showReadingTime: false
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'lists',
        path: 'lists',
        routeBasePath: 'lists',
        sidebarPath: require.resolve('./sidebars.js')
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'donate',
        path: 'donate',
        routeBasePath: 'donate',
        sidebarPath: require.resolve('./sidebars.js')
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'general',
        path: 'general',
        routeBasePath: 'general',
        sidebarPath: require.resolve('./sidebars.js')
      }
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/lists/bnnd',
            from: '/bnnd/'
          },
          {
            to: '/lists/clubs',
            from: '/lst/'
          },
          {
            to: '/lists/thx',
            from: '/thx/'
          }
        ]
      }
    ],
    './plugins/statuspage'
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/style/cover/png/white.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false
      },
      algolia: {
        appId: 'H9YMJTBN61',
        apiKey: 'db97afee85dc0e75cc8218a904d96c65',
        indexName: 'nng-alonas'
      },
      navbar: {
        title: 'nng',
        logo: {
          alt: 'nng logo',
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: '🌀 Общее',
            items: [
              {
                to: 'general/faq',
                label: '💁‍♂️ ЧАВО'
              },
              {
                to: 'general/rules',
                label: '⚖️ Правила'
              }
            ]
          },
          {
            type: 'dropdown',
            position: 'left',
            label: '📝 Списки',
            items: [
              {
                to: 'lists/clubs',
                label: '👥 Группы'
              },
              {
                to: 'lists/bnnd',
                label: '⚖️ Заблокированные'
              },
              {
                to: 'lists/thx',
                label: '🤗 Спасибо'
              }
            ]
          },
          {
            type: 'dropdown',
            position: 'left',
            label: '👨‍💼 Админам',
            items: [
              {
                to: 'admins/style',
                label: '🎨 Оформление'
              },
              {
                to: 'admins/category/️-скрипты',
                label: '⚙️ Скрипты'
              },
              {
                to: 'admins/api',
                label: '🗄 API'
              },
              {
                to: 'admins/processes',
                label: '🔧 Процессы'
              },
              {
                to: 'admins/copy',
                label: '🐁 Условия использования'
              }
            ]
          },
          {
            to: 'blog',
            label: '✒️ Блог',
            position: 'left'
          },
          {
            type: 'dropdown',
            position: 'left',
            label: '💸 Донат',
            items: [
              {
                to: 'donate/methods',
                label: '💳 Способы перевода'
              },
              {
                to: 'donate/spends',
                label: '🫰 Траты'
              },
              {
                to: 'donate/category/-заказы',
                label: '📦 Заказы'
              }
            ]
          },
          {
            href: 'https://status.alonas.lv/',
            label: '📡 Статус',
            position: 'right'
          },
          {
            href: 'https://vk.com/nnghub',
            position: 'right',
            className: 'header-vk-link',
            'aria-label': '🐩 ВКонтакте'
          },
          {
            href: 'https://github.com/thealonas',
            position: 'right',
            className: 'header-github-link',
            'aria-label': '🐙 GitHub'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '🌀 Общее',
            items: [
              {
                label: '💁‍♂️ ЧАВО',
                to: 'general/faq'
              },
              {
                label: '⚖️ Правила',
                to: 'general/rules'
              }
            ]
          },
          {
            title: '📝 Списки',
            items: [
              {
                label: '👥 Группы',
                to: 'lists/clubs'
              },
              {
                label: '⚖️ Заблокированные',
                to: 'lists/bnnd'
              },
              {
                label: '🤗 Спасибо',
                to: 'lists/thx'
              }
            ]
          },
          {
            title: '👨‍💼 Админам',
            items: [
              {
                label: '🎨 Оформление',
                to: 'admins/style'
              },
              {
                label: '⚙️ Скрипты',
                to: 'admins/category/️-скрипты'
              },
              {
                label: '🗄 API',
                to: 'admins/api'
              },
              {
                label: '🔧 Процессы',
                to: 'admins/processes'
              },
              {
                label: '🐁 Условия использования',
                to: 'admins/copy'
              }
            ]
          },
          {
            title: '📦 Прочее',
            items: [
              {
                label: '✒️ Блог',
                to: 'blog'
              },
              {
                label: '💸 Донат',
                to: 'donate/methods'
              },
              {
                label: '🐩 ВКонтакте',
                href: 'https://vk.com/nnghub'
              },
              {
                label: '🐙 GitHub',
                href: 'https://github.com/thealonas'
              },
              {
                label: '📡 Статус',
                href: 'https://status.alonas.lv/'
              }
            ]
          }
        ],
        copyright: `Сделано с ❤️ <a href="https://alonas.lv/">Коллективом Alonas</a>`
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ['json']
      }
    })
};

module.exports = config;
