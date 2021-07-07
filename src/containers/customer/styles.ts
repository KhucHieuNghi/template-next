import { Input } from 'antd';
import styled from '@emotion/styled';
import stylesCommon from '~/styles/variables';

const {
    size8, sSize24, fSize24,
} = stylesCommon;

export const Page = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
`;

export const FormWrapper = styled.div`
    display: flex;
    max-width: 550px;
    min-width: 320px;
    flex-direction: column;
    padding: ${sSize24};
    background: white;
    border-radius: ${size8}
`;
export const InputStyled = styled(Input)`
    align-items: center;
    border: none;
    border-bottom: 1px solid #a59b9b99;
    padding: ${size8};
`;

export const WrapperTitle = styled.div`
    align-self: center;
    text-align: center;
    font-size: ${fSize24};
    width: 230px;
    line-height: 1.3em;
`;
export const WrapperDetail = styled.div`
    margin: ${size8}    
`;

export const WrapperButton = styled.div`
    align-self: center;
    button{
        min-width: 300px;
        background-color: #E31836;
        :hover, :active, :focus { background-color: #881326};
        border: none;
    }
`;
