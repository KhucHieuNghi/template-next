import axios from 'axios';
import message from 'antd/lib/message';
import { getMessageIntl } from './i18n';

export * from 'axios';

const request = axios.create({
    timeout: 5000,
    headers: { 'X-Custom-Header': 'foobar' },
});

export function createRequestInterceptor(isNeedAuthorize = true) {
    return async function interceptor(config: any) {
        // Derived config from dynamic config

        const baseConfig = {
            ...config,
            headers: {
                ...config.headers,
                'x-envoy-upstream-rq-timeout-ms': 30000,
            },
        };

        if (isNeedAuthorize) {
            return {
                ...baseConfig,
                headers: {
                    Authorization: 'Bearer',
                },
            };
        }
        return {
            ...baseConfig,
        };
    };
}

//  * Check if the given status is server error or not.
//  */
export function isServerError({ response: { status } }: any) {
    return status >= 500;
}
//  * Check if the error is response error or not.
//  */
export function isResponseError({ response }: any) {
    return !!response;
}

export function createHandlerChain(handlers: any) {
    return function handlerChain(error: any) {
        const {
            config: { useDefaultErrorHandler = true },
        } = error;
        if (!useDefaultErrorHandler) {
            return Promise.reject(error);
        }
        const stack = [...handlers];

        function next() {
            if (stack.length === 0) {
                return;
            }
            const nextHandler: any = stack.pop();
            nextHandler(error, next);
        }

        next();
        return Promise.reject(error);
    };
}

export const serverErrorHandler = (error:any, next: any) => {
    if (isServerError(error)) {
        if (typeof window !== 'undefined') {
            const messageError = error?.response?.data.data.responseMessage || getMessageIntl('common.system-error');
            message.error(messageError);
        }
    }
    next();
};

export function parseResultsHandler(response: any) {
    return response;
}

request.interceptors.request.use(createRequestInterceptor());
request.interceptors.response.use(
    parseResultsHandler,
    createHandlerChain([
        serverErrorHandler,
    ]),
);

export default request;
