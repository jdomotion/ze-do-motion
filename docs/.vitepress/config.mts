import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
  base: '/',
  description: 'Exploring expressions, scripts, and freelancing for motion designers.',
  markdown: {
    headers: {
      level: [0, 0],
    },
  },
  themeConfig: {
    outline:[2,3],
    footer: {
      message: 'Zé do Motion',
      copyright: 'Copyright © 2025',
    },
    search: {
      provider: 'local',
    },
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/after-effects/': sidebarAE(),
    },  

  },
  title: 'Zé do Motion',
  vite: {
    plugins: [
      Unocss({
        configFile: '../../unocss.config.ts',
      }),
    ],
  },
})

function nav() {
  return [
    { text: 'After Effects', 
      items: [
        {
          text: 'Primeiros Passos',
          link: '/after-effects/index',
        },
        {
          text: 'Expressões',
          link: '/after-effects/expressoes/introducao',
        },
      ],
    },

    { text: 'Houdini', link: '/houdini/houdini'},

    { text: 'Bastidores', link: '/bastidores'},

    { text: 'Sobre', link: '/sobre'},
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is this?', link: '' },
      ],
    },
    {
      text: 'Features',
      collapsible: true,
      items: [
        { text: 'UnoCSS', link: '' },
      ],
    },
  ]
}

function sidebarAE() {
  return [
    {
      text: 'After Effects',
      link: '/after-effects/index',
      items: [
        { text: 'Expressões',
          items: [
            {
              text: 'Introdução às Expressões',
              link: '/after-effects/expressoes/introducao',
            },
            {
              text: '5 Funções Essenciais',
              link: '/after-effects/expressoes/funcoes-essenciais',
            },
          ],
        },
      ],
    },
  ]
}