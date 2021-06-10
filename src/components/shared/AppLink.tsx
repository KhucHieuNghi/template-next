/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactNode, CSSProperties } from 'react';
import Link, { LinkProps } from 'next/link';

export type IAppLinkHref = LinkProps;

interface Props {
    style?: CSSProperties,
    target?:string
    children: ReactNode
    className?: string
    onMouseEnter?: ((event: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
    onClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
    href: string;
    ref?: any;
}

const AppLink = ({
    children, href, ...commonLinkProps
}:Props) => (
    <Link href={href}>
        <a {...commonLinkProps}>
            {children}
        </a>
    </Link>
    );

export default AppLink;
