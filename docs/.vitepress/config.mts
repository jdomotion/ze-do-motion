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
          text: 'Getting Started',
          link: '/after-effects/index',
        },
        {
          text: 'Expressions',
          link: '/after-effects/expressions/introduction',
        },
        {
          text: 'Scripts',
          link: '/after-effects/scripts/',
        },
        {
          text: 'Mograph',
          link: '/after-effects/mograph',
        },
        {
          text: 'Motion Syntax',
          link: '/after-effects/motion-syntax/index',
        },
      ],
    },

    { text: 'Houdini', link: '/houdini/houdini'},
   // { text: 'Freelance', link: '/freelance/freelance'},
   // { text: 'Blog', link: '/blog/', activeMatch: '/blog/' },
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
        { text: 'Expressions',
          items: [
            {
              text: 'Introduction to Expressions',
              link: '/after-effects/expressions/introduction',
            },
            {
              text: 'Top 10 Essential Expressions',
              link: '/after-effects/expressions/top-10',
            },
          ],
        },
        { text: 'Mograph',
          link: '/after-effects/mograph/mograph',
          items: [
            {
              text: '--', //Livro?
              link: '/after-effects/mograph',
            },
            {
              text: '--', 
              link: '/after-effects/mograph',
            },
            {
              text: '--',
              link: '/after-effects/mograph',
            },
            {
              text: '--',
              link: '/after-effects/mograph',
            },
          ],
        },
        { text: 'Motion Syntax',
          link: '/after-effects/motion-syntax/index',
          items: [
            {
              text: 'Day 1 - Basic Assignment and Arithmetic Manipulation',
              link: '/after-effects/motion-syntax/day-01',
            },
            {
              text: 'Day 2 - Clamp, Fit, and Waves',
              link: '/after-effects/motion-syntax/day-02',
            },
            {
              text: 'Day 3 - Channel Ramps and Procedural Waveforms',
              link: '/after-effects/motion-syntax/day-03',
            },
            {
              text: 'Day 4 - Length, Distance Functions, and Time-Based Animation',
              link: '/after-effects/motion-syntax/day-04',
            },
            {
              text: 'Day 5 - Modulo, Quantization, and Pattern-Based Motion',
              link: '/after-effects/motion-syntax/day-05',
            },
            {
              text: 'Day 6 - Layer Relationships and Property Manipulation',
              link: '/after-effects/motion-syntax/day-06',
            },
            {
              text: 'Day 7 - Using valueAtTime() for Time-Based Animations',
              link: '/after-effects/motion-syntax/day-07',
            },
            {
              text: 'Day 8  - Noise Functions and Procedural Randomness',
              link: '/after-effects/motion-syntax/day-08',
            },
            {
              text: 'Day 9 - Arrays and Loops – Enhancing Expressions with Iteration',
              link: '/after-effects/motion-syntax/day-09',
            },
            {
              text: 'Day 10 - Dot and Cross Product – Vector Math for Motion',
              link: '/after-effects/motion-syntax/day-10',
            },
            {
              text: 'Day 11 - Text Animation with Expressions',
              link: '/after-effects/motion-syntax/day-11',
            },
            {
              text: 'Day 12 - Using Expressions for Procedural Animation',
              link: '/after-effects/motion-syntax/day-12',
            },
          ],
        },
      ],
    },
  ]
}