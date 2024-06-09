import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) =>{
    try {
        const token = req.cookies.jwt;
        if(!token) {
            return res.status(401).json({ error: "No autorizado - No hay token"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({ error: "No autorizado - Token inválido"});
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user) {
            return res.status(404).json({ error: "Usuario no encontrado"});
        }

        req.user = user

        next();

    } catch (error) {
        console.log("Error en middleware protextRoute: ", error.message)
        res.status(500).json({ error: "Error del servidor"});
    }
};

export default protectRoute;