/* eslint-disable import/no-duplicates */
//  <reference path="../../node_modules/@types/react/index.d.ts"/>
import { AriaAttributes, DOMAttributes } from 'react';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { AxiosResponse } from 'axios';

declare module '*.svg' {
    import { FunctionComponent } from 'react';

    const content: FunctionComponent<{
        className?: string;
    }>;

    // noinspection JSDuplicatedDeclaration
    export default content;
}

declare module 'react' {

    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {}
}

declare module 'next' {

    interface NextApiRequestCustom extends NextApiRequest {
        getStructureDynamicRouterServer: () => any
        RESP: () => any
    }

    interface NextApiResponseCustom extends NextApiResponse {
        RESP: (param: any) => any
    }
}

declare global {

    export interface IResponseServer<T> {
        isSuccess: boolean
        data: T
        message?: string
    }

    export type IResponseAxios<T> = AxiosResponse<IResponseServer<T>>

    type IEmpty = Record<string, never>

    type Dict<T extends any = IEmpty> = {
        [key: string]: T | undefined;
    }
    type Enumerable<T> = {
        [P in keyof T]: T[P];
    };
}
