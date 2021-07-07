// const HTTP_STATUS = require('~/utils/http');

const responseSuccess = (res, data) => {
    res.status(200).json({
        isSuccess: true,
        data,
    });
};

const responseErrors = (res, status, message, data = {}) => {
    res.status(status).json({
        isSuccess: false,
        message,
        data,
    });
};

module.exports = (req, res, next) => {
    res.RESP = (data = {}) => {
        if (typeof data !== 'object') {
            responseSuccess(res, data.toString());
        } else {
            responseSuccess(res, data);
        }
    };

    res.ERROR = (status = 500, message, data = {}) => {
        responseErrors(res, status, message, data);
    };

    next();
};
