const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'StarryLee',
    image: '/avatar.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'Mom & ProductManager',
    bio: '?',
    email: 'stralighteel@gmail.com',
    linkedin: 'stralighteel',
    github: 'stralighteel',
    instagram: '',
  },
  projects: [
    {
      name: 'Untilled',
      href: 'https://untilled.web.app'
    }
  ],
  // blog setting (required)
  blog: {
    title: 'Personal eXperience',
    description: 'welcome to starry-log!',
    theme: 'auto' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://starry-7339ve4bp-stralighteel.vercel.app',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'ko-KR', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId:805e1ba5e6d647a99117da2004f328e2
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'stralighteel/morethan-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
