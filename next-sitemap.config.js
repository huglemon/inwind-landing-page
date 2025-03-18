/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://landingpage.huglemon.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/404', '/500'],
  robotsTxtOptions: {
    additionalSitemaps: [
      // 如果有额外的站点地图，可以在这里添加
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  // 如果有自定义的转换规则，可以在这里添加
  // transform: async (config, path) => {
  //   return {
  //     loc: path,
  //     changefreq: config.changefreq,
  //     priority: config.priority,
  //     lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
  //     alternateRefs: config.alternateRefs ?? [],
  //   }
  // },
} 