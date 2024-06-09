import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {

        // Obtener el mensaje el id de los mensajes de los usuarios
        const {message} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id

        // Checar si existe la conversación entre los usuarios
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        })

        // Si no existe la conversación se crea una
        if(!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        // Se crea un nuevo mensaje
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // Funcionalidad de socket.io 

        // Guardar los mensajes en la base de datos
        // await conversation.save();
        // await newMessage.save();
        // Correr en paralelo los mensajes
        await Promise.all([conversation.save(), newMessage.save()]);

        // la respuesta
        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error en el controlador senMessage", error.message)
        res.status(500).json({error:"Error del servidor"});
    }
}

export const getMessage = async (req, res) => {
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;
        
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages"); // No es una referencia sino el mensaje en si

        //  Si no hay conversación no regresa nada, regresa un arreglo vacío
        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;
        
        res.status(200).json(messages);

    } catch (error) {
        console.log("Error en el controlador getMessage", error.message);
        res.status(500).json({error:"Error del servidor"});
    }
}