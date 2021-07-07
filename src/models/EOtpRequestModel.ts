import { Component } from "react";

export class EOtpRequestModel extends Component {
    encryptedCUID?: string;
    customerName?: string;
    idNumber?: number;
    phoneNumber?: string;
    birthDate?: Date;
    documentType?: string;
    documentNumber?: number;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    frb?: string;
    dl?: string;

    constructor(props) {
        super(props);
        this.encryptedCUID = props.encryptedCUID;
        this.customerName = props.customerName;
        this.idNumber = props.idNumber;
        this.birthDate = props.birthDate;
        this.phoneNumber = props.phoneNumber;
        this.documentType = props.documentType;
        this.documentNumber = props.documentNumber;
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.middleName = props.middleName;
        this.frb = props.frb;
        this.dl = props.dl;
    }
}

export default EOtpRequestModel;