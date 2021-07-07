import request from '~/utils/request';
import { IInfo } from '~/models/customerInterface';
import CustomerAbstract from '../abstracts/customer';

export default class CustomerApi extends CustomerAbstract {
    async getInfo(params: string): Promise<IResponseAxios<IInfo>> {
        return request.get(`/api/gateway/esigning-service/consents/v1/customer-details?user=${params}`);
    }
}
