const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "styles/_mixins.scss"; @import "styles/_variables.scss";`,
  },
  images: {
    domains: ['ifh.cc', 'img.youtube.com']
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/admin',
  //       destination: '/',
  //       permanent: false,
  //     },
  //   ];
  // },
}

module.exports = nextConfig