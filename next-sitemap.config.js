/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.VERCEL_URL ||
    process.env.SITE_URL ||
    "https://docs.web.start-ui.com",
  generateRobotsTxt: true,
};
