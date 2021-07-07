import { EOtpModel } from '~/models/EOtpModel';
import EOtpRequestModel from '~/models/EOtpRequestModel';
import request from '~/utils/request';

export default class EServiceOtpApis {
    async verifyOtp(otpObj: EOtpModel): Promise<any> {
        return request.post('/api/customer/e-service-otp/sign', otpObj);
    }

    async resendOtp(data: EOtpRequestModel): Promise<any> {
        return request.post('/api/customer/e-service-otp/request', data);
    }
}
