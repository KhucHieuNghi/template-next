type IType = {
    type: string | number
}

export interface IInitState {
    info: IEmpty
}

export type IIncrementCounter = IType & {
    payload?:any
}

export type IDecrementCounter = IType & {
    payload?:any
}

export type IAction = IIncrementCounter | IDecrementCounter
