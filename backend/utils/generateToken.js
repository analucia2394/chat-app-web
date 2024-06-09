import jwt from 'jsonwebtoken'

// Generar el token que expira en 30 días
const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })

    // Seguridad
    res.cookie("jwt", token,{
        maxAge: 30 * 24 *60 *60 * 1000, // MS
        httpOnly: true, // prevenir ataques XXS ataques con scripts JS
        sameSite:"strict", // CSRF previene de ataques
        secure: process.env.NODE_ENV !== "development"
    })
}

export default generateTokenAndSetCookie;