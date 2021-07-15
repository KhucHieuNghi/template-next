import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Countdown from 'react-countdown';
import { useRouter } from 'next/router';
import 'antd/dist/antd.css';
import { MobileOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import {
    Container, VerifyContainer, VerifyWrapper, VerifyBtn, WrapperInput, Title,
} from './styles';
import EOtpModel from '~/models/EOtpModel';

import { eServiceOtpApis } from '~/services';
import EOtpRequestModel from '~/models/EOtpRequestModel';

const EServiceOtp = () => {
    const router = useRouter();

    const { info } = useSelector((props: any) => props.customer);
    useEffect(() => {
        // by pass check
        info.phoneNumber = '0985720350';
        info.requestID = 'TWx4RmtKcjAtRjFFLXdRWmp2R3Axdz09RWU5cFNua2pVS1k9XzA5ODU3MjAzNTBfNDYxNzUxMjU2NTEw';
        info.signature = 'asd24723jjwehrwekhkdshfsdhfehkhrekte';
        if (!info.phoneNumber || !info.requestID || !info.signature) {
            router.push('/customer/contract');
        }
    }, []);

    const phoneNumber = info.phoneNumber ? info.phoneNumber : '0985720350';

    const otpObj = new EOtpModel({
        otp: '',
        requestID: info.requestID ? info.requestID : 'TWx4RmtKcjAtRjFFLXdRWmp2R3Axdz09RWU5cFNua2pVS1k9XzA5ODU3MjAzNTBfNDYxNzUxMjU2NTEw',
        signature: info.signature ? info.signature : 'asd24723jjwehrwekhkdshfsdhfehkhrekte',
    });
    let inputDisabled = false;

    const getCountDown = (timer) => timer + 300000;

    let countDown = getCountDown(Date.now());

    let retryTimeLeft = 3;
    let resendTimeLeft = 3; // the resendTimeLeft should be stored stable
    const resendTimer = 0;
    const hasError = false;
    let errorMessage = '';

    const hidden = (phone, number) => {
        const startIndex = [...`${phone}`].length - number;
        return [...phone]
            .map((char, i) => {
                if (i < startIndex) return 'x';
                return char;
            })
            .join('');
    };

    const otpRegex = /^[A-Za-z0-9\b]+$/;
    const handleChange = (e) => {
        const { value } = e.target;
        if (value.length <= 8 && !otpRegex.test(value)) {
            return;
        }
        otpObj.otp = value;
    };

    /*
     * call method to resend otp
     *
    */
    const resend = async () => {
        resendTimeLeft -= 1;
        retryTimeLeft = 3;
        if (resendTimeLeft < 0) {
            // show message: over limit resend times
            errorMessage = 'Bạn đã yêu cầu đủ số lần xác thực OTP. Hãy thử lại vào ngày mai!';
        }
        // call resend api
        const requestOtp = new EOtpRequestModel({
            encryptedCUID: info.encryptedCUID,
            customerName: info.customerName,
            idNumber: info.idNumber,
            phoneNumber: info.phoneNumber,
            birthDate: info.birthDate,
            documentType: info.documentType,
            documentNumber: info.documentNumber,
            firstName: info.firstName,
            lastName: info.lastName,
            middleName: info.middleName,
            frb: info.frb,
            dl: info.dl,
        });
        const requestOtpMock = new EOtpRequestModel({
            encryptedCUID: 'MlxFkJr0-F1E-wQZjvGp1w==Ee9pSnkjUKY=',
            customerName: 'IKPPOnlJYk AMRIT ACLND KRGA CoiTeZGiVM',
            idNumber: '461751256510',
            phoneNumber: '0985720350',
            birthDate: '22/06/2001',
            documentType: 'FAMILY_BOOK',
            documentNumber: '47418116',
            firstName: 'CoiTeZGiVM',
            lastName: 'IKPPOnlJYk',
            middleName: 'AMRIT ACLND KRGA',
            frb: '47418116',
            dl: '',
        });
        const result = await eServiceOtpApis.resendOtp(requestOtpMock);
        countDown = getCountDown(Date.now());
        console.log(`Resent result: ${JSON.stringify(result)}`);
        return result.data;
    };

    /**
     * call method to verify input otp
     * @returns result
     */
    const verifyOtp = async () => {
        retryTimeLeft -= 1;

        if (otpObj.otp) {
            try {
                console.log('Verify OTP submitted');
                const result = await eServiceOtpApis.verifyOtp(otpObj);
                console.log(`Verified otp: ${JSON.stringify(result)}`);
                // check result success then forward
                if (result.responseCode === 0) {
                    router.push('/customer/contract');
                } else {
                    inputDisabled = true;
                }
            } catch (e) {
                // error
                console.log('Verify OTP failure');
            }
            if (retryTimeLeft === 0) {
                // show over limit retry error
                errorMessage = 'Đã quá 3 lần xác thực OTP. Vui lòng lấy lại mã xác thực!';
            } else {
                // show error message
                errorMessage = 'Xác thực OTP không thành công';
            }
        }
    };

    const renderer = ({
        minutes, seconds, completed,
    }) => {
        if (completed) {
            // change input disable state
            inputDisabled = !inputDisabled;
            // Render a completed state
            return (<span>
                {minutes}
                :
                {seconds}
                    </span>);
        }
        // Render a countdown
        return (<span>
            {minutes}
            :
            {seconds}
                </span>);
    };

    return (
        <Container>
            <a href="#" className="e-service__back" onClick={() => router.back()} style={{ color: 'red' }}>
                <ArrowLeftOutlined className="site-form-item-icon" />
                {' '}
                Quay lại
            </a>
            <VerifyContainer>
                <VerifyWrapper>
                    <Title>
                        XÁC NHẬN KÝ SỬ DỤNG DỊCH VỤ ĐIỆN TỬ
                    </Title>
                    <p className="text-center">
                        Mã xác thực đã được gửi đến số điện thoại
                        {' '}
                        <strong style={{ fontWeight: 'bold' }}>{hidden(phoneNumber, 4)}</strong>
                        <br />
                        và có hiệu lực trong vòng
                        {' '}
                        <span style={{ color: 'red' }}>
                            <Countdown
                                key={countDown}
                                date={countDown}
                                renderer={renderer}
                            />
                        </span>
                    </p>
                    <WrapperInput
                        placeholder="Nhập mã xác thực"
                        size="small"
                        type="text"
                        prefix={<MobileOutlined style={{ fontSize: '150%' }} />}
                        onChange={(e) => handleChange(e)}
                        required
                        className="form-control"
                        pattern="^([0-9]{6}|[0-9]{8})$"
                        data-val-required="Bạn phải nhập mã xác thực"
                        maxLength={8}
                        minLength={6}
                        disabled={inputDisabled}
                        aria-required="true"
                    />

                    <div className="validation-summary-errors" id="message-error" style={{ display: hasError ? 'block' : 'none' }}>
                        <span style={{ color: 'red' }}>
                            {errorMessage}
                        </span>
                    </div>

                    <p className="text-center">
                        Quý khách chưa nhận được mã xác thực?
                        <br />
                        <a href="" onClick={() => resend()} style={{ color: 'red' }}>
                            Gửi lại mã xác thực
                        </a>
                    </p>

                    <VerifyBtn
                        type="button"
                        disabled={inputDisabled}
                        className="btn btn-block btn-red-hc btn-round"
                        data-style="zoom-in"
                        onClick={() => verifyOtp()}
                    >
                        Xác nhận
                    </VerifyBtn>
                </VerifyWrapper>

            </VerifyContainer>
        </Container>
    );
};

export default EServiceOtp;
