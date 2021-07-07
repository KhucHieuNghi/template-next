import Document, {
    Html, Head, Main, NextScript, DocumentContext,
} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx:DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="vi-VN">
                <Head>

                    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

                    {/* <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" /> */}

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
