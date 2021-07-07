import request from '~/utils/request';
import { AbstractDemo } from '../abstracts';

export default class DemoApi extends AbstractDemo {
    async getInfo(): Promise<any> {
        return request.get('/api/customer');
    }
}
