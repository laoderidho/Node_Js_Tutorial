const response = (statusCode, datas, message, res)=>{
    res.status(statusCode).json({
        payload:{
            status_code: statusCode,
            datas: datas,
            message: message
        },
        pagination: {
            previus: "",
            next: "",
            max:""
        }
    })
}

module.exports = response