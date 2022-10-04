const authValidator = (req, res, next) => {
    const administrador = true;
    if (administrador) {
        next();
    } else {
        res.status(400).send("Función exclusiva del administrador");
    }
}

export default authValidator;