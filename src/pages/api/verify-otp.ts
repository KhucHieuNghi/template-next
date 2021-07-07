import type { NextApiRequest, NextApiResponse } from 'next';
import { config } from '~/utils/contains';
import request from '~/utils/request';

const { OTP_ESIGN_GATEWAY } = config;

export default async (req:NextApiRequest, res: NextApiResponse<any>) => {
    try {
        const result = await request.post(`${OTP_ESIGN_GATEWAY}`, req.body);
        res.status(200).json(result.data.data);
    } catch (e) {
        res.status(e.status).json({ messsage: e.messsage });
    }
}