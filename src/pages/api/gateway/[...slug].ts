import type { NextApiRequestCustom, NextApiResponseCustom } from 'next';
import { config } from '~/utils/contains';
import { handleException, withMiddleware } from '~/utils/http';
import request from '~/utils/request';

const handler = async (req:NextApiRequestCustom, res: NextApiResponseCustom) => {
    try {
        const {
            method, path, queryParams, data,
        } = req.getStructureDynamicRouterServer();
        const result = await request({
            method,
            url: `${config.ESERVICE_GATEWAY_API}/${path}?${queryParams}`,
            data,
        });
        res.RESP(result.data.data);
    } catch (e) {
        handleException(res, e);
    }
};

export default withMiddleware(handler);
