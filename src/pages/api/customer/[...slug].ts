import type { NextApiRequest, NextApiResponse } from 'next';
import { config } from '~/utils/contains';
import { handleException } from '~/utils/http';
import request from '~/utils/request';

export default async (req:NextApiRequest, res: NextApiResponse<any> & any) => {
    try {
        const result = await request.get(`${config.ESERVICE_GATEWAY_API}/esigning-service/consents/v1/customer-details?user=${req.query.user}`);
        res.RESP(result.data.data);
    } catch (e) {
        handleException(res, e);
    }
};
