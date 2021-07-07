import {
    EditOutlined, IdcardOutlined, CalendarOutlined, PhoneOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { useCustomer } from '~/stores/customer/customerHook';
import { URL } from '~/utils/urls';
import {
    Page, FormWrapper, WrapperTitle, InputStyled, WrapperButton, WrapperDetail,
} from './styles';
import stylesCommon from '~/styles/variables';

const {
    sSize10, colorRed, fSize20,
} = stylesCommon;
interface IPageProps {
    Component: PropsWithChildren<any>
}

export type TPageProps = PropsWithChildren<IPageProps | Partial<IPageProps>>
const IconComponent = ({ Component } : TPageProps) => (
    <Component style={{ fontSize: fSize20, marginRight: sSize10, color: colorRed }} />);

const CustomerEServiceInfo = () => {
    const intl = useIntl();
    const { info } = useCustomer();
    const router = useRouter();

    const redirectToPageShowInfo = () => {
        router.push(URL.customer_eservice_show);
    };
    return (
        <Page>
            <FormWrapper>
                <WrapperTitle>
                    {intl.formatMessage({ id: 'customer.eserviceinputinfo-title' })}
                </WrapperTitle>
                <WrapperDetail id="eservice-detail">
                    <InputStyled
                        placeholder={intl.formatMessage({ id: 'customer.firstName' })}
                        id="firstName"
                        name="firstName"
                        prefix={<IconComponent Component={EditOutlined} />}
                        value={info.firstName}
                        readOnly
                    />
                    <InputStyled
                        placeholder={intl.formatMessage({ id: 'customer.middleName' })}
                        id="middleName"
                        name="middleName"
                        prefix={<IconComponent Component={EditOutlined} />}
                        value={info.middleName}
                        readOnly
                    />
                    <InputStyled
                        placeholder={intl.formatMessage({ id: 'customer.lastName' })}
                        id="lastName"
                        name="lastName"
                        prefix={<IconComponent Component={EditOutlined} />}
                        value={info.lastName}
                        readOnly
                    />
                    <InputStyled
                        id="idNumber"
                        name="idNumber"
                        placeholder={intl.formatMessage({ id: 'customer.idNumber' })}
                        prefix={<IconComponent Component={IdcardOutlined} />}
                        value={info.idNumber}
                        readOnly
                    />
                    <InputStyled
                        id="birthDate"
                        name="birthDate"
                        placeholder={intl.formatMessage({ id: 'customer.birthDate' })}
                        prefix={<IconComponent Component={CalendarOutlined} />}
                        value={info.birthDate}
                        readOnly
                    />
                    <InputStyled
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder={intl.formatMessage({ id: 'customer.phoneNumber' })}
                        prefix={<IconComponent Component={PhoneOutlined} />}
                        value={info.phoneNumber}
                        readOnly
                    />
                </WrapperDetail>
                <WrapperButton id="actions">
                    <Button id="btn-register" type="primary" onClick={redirectToPageShowInfo} shape="round" size="large">
                        {intl.formatMessage({ id: 'common.button-register' })}
                    </Button>
                </WrapperButton>
            </FormWrapper>
        </Page>
    );
};
export default CustomerEServiceInfo;
