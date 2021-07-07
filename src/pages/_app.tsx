import '../styles/index.scss';
import '../styles/index.css';
import React from 'react';
import { AppProps, AppContext } from 'next/app';
import Head from 'next/head';
import { createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import store from '~/stores/rootStores';
import Layout from '~/components/layout';
import I18N from '~/utils/i18n';

export type StaticInitProp = AppProps & AppContext

function MyApp({ Component, pageProps }: StaticInitProp) {
    return (
        <React.Fragment>
            <I18N>
                <Head>
                    <title>Home Credit Vietnam</title>
                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                </Head>
                <Provider store={store}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Provider>
            </I18N>
        </React.Fragment>
    );
}

MyApp.getInitialProps = async ({ Component, ctx }: StaticInitProp) => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
};

const makeStore = () => store;

const Wrapper = createWrapper(makeStore);

export default Wrapper.withRedux(MyApp);
