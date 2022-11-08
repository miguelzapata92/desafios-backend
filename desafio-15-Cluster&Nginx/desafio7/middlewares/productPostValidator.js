const productPostValidator = (req, res, next) => {
    const {
        name,
        price,
        urlImage,
        description,
        code,
        stock
    } = req.body

    if (name && price && urlImage && description && code && stock) {
        next()
    } else {
        res.status(400).send("Ingrese todos los datos por favor")
    }
}

export default productPostValidator;
    