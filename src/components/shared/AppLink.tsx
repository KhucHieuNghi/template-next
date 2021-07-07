/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactNode, CSSProperties } from 'react';
import Link, { LinkProps } from 'next/link';

export type IAppLinkHref = LinkProps;

interface IProps {
    style: CSSProperties,
    target:string
    children: ReactNode
    className: string
    // eslint-disable-next-line no-unused-vars
    onClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
    href: string;
    ref: any;
}

const AppLink = ({
    children, href, ...commonLinkProps
}:IProps) => (
    <Link href={href}>
        <a {...commonLinkProps}>
            {children}
        </a>
    </Link>
);

export default AppLink;
