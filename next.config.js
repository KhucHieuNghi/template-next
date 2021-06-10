// const withCSS = require('@zeit/next-css');
// const withSass = require('@zeit/next-sass');
// const withLess = require('@zeit/next-less');

const locales = ['en', 'vi'];
const defaultLocale = 'en';

module.exports = {
    env: {
        basePath: process.env.BASE_PATH || '',
    },
    basePath: process.env.BASE_PATH || '',
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
};
