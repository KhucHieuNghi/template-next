import querystring from 'querystring';
import { Method } from '~/utils/request';

export const HTTP_STATUS = {
    OK: 200,
    INTERNAL_ERROR: 500,
};

export const handleException = (res, e) => {
    if (e.response) {
        return res.ERROR(e?.response?.status, e?.message, e?.response?.data);
    }
    return res.ERROR(e.status, e.message);
};

export const withMiddleware = (handler) => (req, res) => {
    req.getStructureDynamicRouterServer = () => {
        const { method: methodParam, query, body } = req;
        const { slug, ...other } = query;

        const method = methodParam as Method;

        const path = [...slug].join('/');
        const queryParams = querystring.stringify(other);
        return {
            method, path, queryParams, data: body,
        };
    };

    return handler(req, res);
};
