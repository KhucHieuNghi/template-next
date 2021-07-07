import { Component } from 'react';

export class EOtpModel extends Component {
    otp: string;
    requestID: string;
    signature: string;

    constructor(props) {
        super(props);
        this.otp = props.otp;
        this.requestID = props.requestID;
        this.signature = props.signature;
    }
}

export default EOtpModel;
