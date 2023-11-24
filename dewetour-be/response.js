const response = (statusCode, data, message, res) => {
    const rows = data.rows || [];
    res.status(statusCode).json(
        {
            payload: {
                data,
                message
            },
            metadata:{
                prev:"",
                next:"",
                current:""
            }
        });
};

module.exports = response