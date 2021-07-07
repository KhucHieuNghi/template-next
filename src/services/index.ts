import CustomerApi from './apis/customer';
import Demo from './apis/demo';
import EServiceOtpApis from './apis/verify-otp';

export const API_URL = 'https://localhost:44330';

export const demoApi = new Demo();
export const eServiceOtpApis = new EServiceOtpApis();

export const customerApi = new CustomerApi();
