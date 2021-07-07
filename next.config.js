// const withLess = require('@zeit/next-less');
const withImage = require('next-images');
const webpack = require('webpack');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
// const path = require('path');
// const withPreact = require('next-plugin-preact');
const withSourceMaps = require('@zeit/next-source-maps')();

const locales = ['vi-VN'];
const defaultLocale = 'vi-VN';

// const timezone = {
//   version: '2019a',
//   zones: [
//     `Asia/Ho_Chi_Minh|LMT PLMT +07 +08 +09|-76.E -76.u -70 -80
//      -90|0123423232|-2yC76.E bK00.a 1h7b6.u 5lz0 18o0 3Oq0 k5b0 aW00 BAM0|90e5`,
//   ],
//   links: [
//     'Asia/Ho_Chi_Minh|Asia/Saigon',
//   ],
// };

// noinspection JSUnusedGlobalSymbols

const isProduction = process.env.NODE_ENV === 'production';

module.exports = withBundleAnalyzer(withSourceMaps(withImage({
  env: {
    basePath: process.env.BASE_PATH || '',
  },
  distDir: isProduction ? '.build' : null,
  compress: true,
  basePath: process.env.BASE_PATH || '',
  i18n: {
    locales,
    defaultLocale,
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  webpack(config) {
    Object.assign(config.resolve.alias, {
      // '@ant-design/icons/lib/dist$': path.resolve(__dirname, './static/icons.js'),
      // './data/packed/latest.json': path.resolve(__dirname, './static/timezone.json'),
      // './data/packed/latest.json': JSON.stringify(timezone),
    });

    config.plugins.push(
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    );

    // config.module.rules.push({
    //   test: /\.(ico|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
    //   use: {
    //     loader: 'file-loader',
    //   },
    // });
    config.module.rules.push({
      test: /\.(ttf|eot)$/i,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][names].[ext]',
          outputPath: 'static/',
        },
      },
    });
    return config;
  },
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    env: process.env.ENV || 'development',
    release: process.env.RELEASE || 'lastest',
  },
  async rewrites() {
    return [
      ...locales.filter((locale) => locale !== defaultLocale).map((locale) => [
        { source: `/${locale}{/}?`, destination: '/' },
        { source: `/${locale}/:path*`, destination: '/:path*' },
      ]).reduce((acc, cur) => [...acc, ...cur], []),
    ];
  },
  async redirects() {
    return [
      {
        source: `/${defaultLocale}{/}?`,
        destination: '/',
        permanent: true,
      },
      {
        source: `/${defaultLocale}/:path*`,
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
})));
