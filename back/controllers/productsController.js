exports.getProducts=(req, res, next) => { // puede que necesite algo (require), responsa algo (response),  o haga algo despues (next)
    res.status(200).json({
        sucess:true,
        message: "En esta ruta podra ver todos los productos"
    })
}