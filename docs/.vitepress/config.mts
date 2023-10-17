import { defineConfig } from 'vitepress'
import fs from "fs"

let pages = fs.readdirSync("./api/");
let page_meta = pages.filter((f) => { return (f !== '.git') && (f !== 'Home.md')}).map((file) => {
  file = file.replace(/\.[^/.]+$/, "")
  return { text: file, link: "/api/" + file } 
})

// eslint-disable-next-line no-control-regex
const rControl = /[\u0000-\u001f]/g;
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g;
const rCombining = /[\u0300-\u036F]/g;

/**
 * Custom slug function to keep compatibility with original content
 */
let cust_slugify = (str: string): string =>
  str
    .normalize('NFKD')
    // Remove accents
    .replace(rCombining, '')
    // Remove control characters
    .replace(rControl, '')
    // Replace special characters
    .replace(rSpecial, '_')
    // Remove continuous separators
    .replace(/-{2,}/g, '_')
    // Remove prefixing and trailing separators
    .replace(/^-+|-+$/g, '')
    // ensure it doesn't start with a number (#121)
    .replace(/^(\d)/, '_$1')
    // // lowercase
    // .toLowerCase()
    ;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CProcessing SG Wiki",
  description: ".",
  lastUpdated: true,
  ignoreDeadLinks: true,
  markdown: {
    anchor: {
      slugify: str => cust_slugify(str) 
    }
  },
  srcExclude: ["/api/Home.md"],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: [1,1],

    search: { provider: 'local' },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © DigiPen Institute of Technology Singapore'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/api' },
      { text: 'Guides', link: '/guides/' }
    ],

    sidebar: [
      {
        text: 'Guides', link: '/guides/',
        items: [
          { text: 'Scaffolding your project', link: '/guides/scaffold/' }
        ]
      },
      { text: 'API Reference', link: '/api/', items: page_meta }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gwong-dp/c_processing' }
    ],
  }
})
