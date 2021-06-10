import { AbstractDemo } from '../abstracts';

export class DemoApi extends AbstractDemo {
    async getInfo(phone: string): Promise<any> {
        return Promise.resolve(phone);
    }
}
