// styles
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.article`
    h3{
        color: blue;
    }
`;

export const StyleComponentDemo = styled.p`
    background-color: hotpink;
`;

export const StyleComponentReuseDemo = styled(StyleComponentDemo)`
    background-color: turquoise;
    font-size: 1em;
`;

export const StyleComponentParamDemo = styled(StyleComponentReuseDemo)((props) => ({
    display: 'flex',
    color: props.color,
}));

export const StyleComponentOtherWayDemo = styled(StyleComponentReuseDemo)`
    color: ${(props) => props.color};
`;

export const ChangeTagHTMLWithStyleComponentDemo = StyleComponentOtherWayDemo.withComponent('aside');

export const hotpink = css({
    color: 'hotpink',
});
