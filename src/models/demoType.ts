import { PropsWithChildren } from 'react';

interface IPageProps {
    text: string | number
}

export type TPageProps = PropsWithChildren<IPageProps | Partial<IPageProps>>
