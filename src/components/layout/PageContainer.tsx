import { PropsWithChildren } from 'react';

interface IProps {}

const PageContainer = ({ children }:PropsWithChildren<IProps>) => (
    <div className="container e-contract list-contract u-posRelative">
        {children}
    </div>
);

export default PageContainer;
