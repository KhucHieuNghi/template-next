import { AbstractDemo } from '../abstracts';

export default class DemoApi extends AbstractDemo {
    async getInfo(phone: string): Promise<any> {
        return Promise.resolve(phone);
    }
}
