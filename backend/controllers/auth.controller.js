import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        // Entradas del usuario al registrarse
        const { fullName,username,password,confirmPassword,gender } = req.body;

        // Checar si la oontraseña coincide
        if(password !== confirmPassword){
            return res.status(400).json({error:"Las contraseñas no coinciden"});
        }

        // Buscar usuario en la base de datos
        const user = await User.findOne({username});

        // Checar si ya existe el usuario ya que debe ser único
        if(user) {
            return res.status(400).json({error:"Este nombre de usuario no está disponible"});
        }

        // Si no existe el usuario se crea uno
        // Contraseña hash
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // https://avatar-placeholder.iran.liara.run/
        // Asignar foto de perfil
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        // Crear el usuario con las entradas del usuario
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if(newUser) {
            // Generar token JWT
            generateTokenAndSetCookie(newUser._id, res);

            // Guardarlo en la base de datos
            await newUser.save();

            // Mandar respuesta de que se ha creado el usuario
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        } else {
            res.status(400).json({ error: "Datos de usuario inválidos"});
        }

    } catch (error) {
        console.log("Error en el controlador de registro", error.message)
        res.status(500).json({error:"Error interno en el servidor"})
    }
};

export const login = async (req, res) => {
   try {
        //Datos de entrada del usuario
        const {username, password} = req.body;

        // Buscar el usuario en la base de datos
        const user = await User.findOne({username});

        // Checar si la contraseña es correcta
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        // Mandar error si alguna de las dos o las dos no coinciden
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Usuario o contraseña inválidos"});
        }

        // Generar el token y la cookie
        generateTokenAndSetCookie(user._id, res);

        // Enviar la respuesta
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });


   } catch (error) {
        console.log("Error en el controlador de login", error.message)
        res.status(500).json({error:"Error interno en el servidor"})
   }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge:0})
        res.status(200).json({message:"Cerrado de sesión exitoso"})
    } catch (error) {
        console.log("Error en el controlador de logout", error.message)
        res.status(500).json({error:"Error interno en el servidor"})
    }
}

