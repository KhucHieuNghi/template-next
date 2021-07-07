export interface IInfo {
    birthDate: string
    customerName: string
    dl: string
    documentNumber: string
    documentType: string
    encryptedCUID: string
    firstName: string
    frb: string
    idNumber: string
    lastName: string
    middleName: string
    phoneNumber: string
}
export type IInitState = {
    info: IInfo | IEmpty
    loading: boolean
}
