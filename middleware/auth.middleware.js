const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {

    const { authorization } = req.headers
    const [type, token] = authorization.split(' ');

    // проверяю есть authorization в header
    if (!authorization) {
        return res.status(401).json('Ошибка авторизации')
    }
    // проверяю type token'a
    if (type !== 'Bearer') {
        return res.status(401).json('Неверный тип токена')
    }

    try {
        // верифицирую token
        req.user = await jwt.verify(token, process.env.SECRET_JWT)
        //  иди дальше на middleware или controllers
        next() 

    } catch (e) {
        return res.status(401).json(e.toString())
    }
}