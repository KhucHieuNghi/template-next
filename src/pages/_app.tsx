import React, { FC } from 'react';
import '../scss/index.scss';
import withRedux from 'next-redux-wrapper';
import {Provider} from 'react-redux';
import store from '~/stores/rootStores';

React.useLayoutEffect = React.useEffect;
//! error SSR with Atn-design
// https://blog.hao.dev/render-client-side-only-component-in-next-js

interface StaticInitProp{
  Component: FC & { getInitialProps: FC }
  ctx: any
}

function MyApp({ Component, pageProps }: any) {
  return (
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
    );
}

MyApp.getInitialProps = async ({Component, ctx}: StaticInitProp) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  return {pageProps};
};

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
