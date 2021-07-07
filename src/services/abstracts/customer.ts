import { IInfo } from '~/models/customerInterface';

export default abstract class CustomerAbstract {
    abstract getInfo(param: string): Promise<IResponseAxios<IInfo>>;
}
