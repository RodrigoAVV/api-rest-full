const errorHandler = (err, req, res, next) => {
    //console.error(err)
    return res.status(500).json({
        success:false,
        messsage:err.messsage
    })
}

module.exports = errorHandler