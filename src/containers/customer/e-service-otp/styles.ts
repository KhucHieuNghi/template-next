// styles
import styled from '@emotion/styled';
import { Input } from 'antd';

export const Title = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`;

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    min-width: 320px;
    max-width: 80rem;
    justify-content: center;
`;

export const VerifyContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: block;
    background-color: white;
    border: none;
    border-color: transparent;
    border-radius: 1rem;
    padding: 3rem;
    justify-content: center;
    box-shadow: 0 2px 15px rgba(0,0,0,.15);
    padding: 40px;
    background-color: #fff;
`;

export const VerifyWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 40rem;
    justify-content: center;
`;

export const VerifyBtn = styled.button`
    justify-content: center;
    background-color: red;
    border-radius: 1rem;
    height: 40px;
`;

export const WrapperInput = styled(Input)`
    align-items: center;
    height: 5rem;
    border: none;
    border-bottom: 1px solid #a59b9b99;
`;
