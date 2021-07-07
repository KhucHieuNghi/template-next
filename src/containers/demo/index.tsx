import { FC } from 'react';
import { useRouter } from 'next/router';
import Button from 'antd/lib/button';
import {
    Wrapper, StyleComponentDemo, StyleComponentReuseDemo,
    StyleComponentParamDemo, StyleComponentOtherWayDemo,
    ChangeTagHTMLWithStyleComponentDemo,
    hotpink,
} from './demoStyled';
import {
    useDemo, useUpdate,
} from '~/stores/demo/demoHook';

const Demo:FC<IEmpty> = () => {
    const router = useRouter();
    const demo = useDemo();

    const qwe = useUpdate();

    return (
        <Wrapper>
            <p>{`redux value: ${demo.value}`}</p>
            {/* <Button onClick={() => dispatch(demoActions.fetchApi(demo.value + 1))}>Update redux</Button> */}
            <Button onClick={() => qwe(demo.value + 1)}>Update redux</Button>
            <section>
                <h3>Router</h3>
                <div>
                    <p>
                        Ex:
                        {router.pathname}
                    </p>
                    <p>Query: use router.query with url: /demo?user=123</p>
                    <p>Get locale current: router.locale</p>
                    <p>Get all locale of web: router.locales</p>
                    <p>Get path name in url: router.pathname</p>
                    <p>Get route define in resource: router.route</p>
                    <p>How to direct: router.push(/slug)</p>
                    <p>... Advance... continue</p>
                </div>
            </section>
            <section>
                <h3>Styles scope in Component</h3>
                <div>
                    <StyleComponentDemo>Style component: in resource</StyleComponentDemo>
                    <StyleComponentReuseDemo>Style component override: in resource</StyleComponentReuseDemo>
                    <StyleComponentParamDemo color="red">
                        Style component has param or argument:
                        in resource
                    </StyleComponentParamDemo>
                    <StyleComponentOtherWayDemo color="blue">
                        Style component has param or argument OTHER WAY:
                        in resource
                    </StyleComponentOtherWayDemo>
                    <ChangeTagHTMLWithStyleComponentDemo>
                        Style component has param or argument OTHER WAY:
                        in resource F12 to view
                    </ChangeTagHTMLWithStyleComponentDemo>
                    <p css={hotpink}>
                        <div css={hotpink} className="name">This is orange</div>
                        CSS in JS: in resource
                    </p>
                    <p css={[hotpink,
                        { padding: 8 },
                    ]}
                    >
                        combine both or more CSS in Js: in resource
                    </p>
                    <p>... Advance... continue</p>
                </div>
            </section>
            <section>
                <h3>Styles SCSS global</h3>
                <div>
                    <p>mixin SCSS, SASS: Leave it and do it later</p>
                    <p>include SCSS, SASS: Leave it and do it later</p>
                    <p>
                        Logical condition if, for, calculation, argument,
                        param... in SCSS or SASS: Leave it and do it later
                    </p>
                    <p>Structure and pattern: Leave it and do it later</p>
                </div>
            </section>
        </Wrapper>
    );
};

export default Demo;
