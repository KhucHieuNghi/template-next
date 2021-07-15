import { PropsWithChildren, Fragment } from 'react';
import PageContainer from './PageContainer';

interface IProps {}

const Layout = ({ children }:PropsWithChildren<IProps>) => (
    <Fragment>
        <PageContainer>
            {children}
        </PageContainer>
    </Fragment>

);

export default Layout;
