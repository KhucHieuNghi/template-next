import type { NextApiRequest, NextApiResponse } from 'next';
import { config } from '~/utils/contains';
import request from '~/utils/request';
import { handleException } from '~/utils/http';

const { ESERVICE_GATEWAY_API } = config;
const ESIGNING_PATH = '/esigning-service/consents/v1';

export default async (req: NextApiRequest, res: NextApiResponse | any) => {
    try {
        const { eOtpPath } = req.query;
        console.log(`Server call e-sigining-service: ${ESERVICE_GATEWAY_API}${ESIGNING_PATH}/${eOtpPath}: ${JSON.stringify(req.body)}`);
        const result = await request.post(
            `${ESERVICE_GATEWAY_API}${ESIGNING_PATH}/${eOtpPath}`,
            req.body,
        );
        console.log(`Server endcall e-sigining-service: `);
        console.log(result.data);
        res.RESP(result.data);
    } catch (e) {
        console.log(`Server endcall e-sigining-service error: ${e.status}:${JSON.stringify(e.message)}`);
        handleException(res, e);
    }
};
