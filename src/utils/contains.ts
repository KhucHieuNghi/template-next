const { env } = process;
const { NODE_ENV } = env;

export const config = {
    development: {
        UI_GATEWAY_API: 'http://ui-gateway.dev.apps-nonprod.platform.hcnet.vn',
        ESERVICE_GATEWAY_API: 'http://esign-gateway.apps-nonprod-blue.platform.hcnet.vn',
        ...process.env,
    },
    production: {
        ...process.env,
    },
    test: {
        ...process.env,
    },
}[NODE_ENV || 'development'];

export const LANG = {
    VI: 'vi-VN',
    EN: 'en-US',
};

export const TEST = {};
