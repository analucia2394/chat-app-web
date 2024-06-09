import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res) => {
    try {

        const loggedInUserId = req.user._id

        // quitar esta parte si queremos ver también nuestro usuario { _id: { $ne: loggedInUserId }}
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId }}).select("-password")

        res.status(200).json(filteredUsers);
        
    } catch (error) {
        console.error("Error en getUsersForSideVar", error.message)
        res.status(500).json({ error: " Error del servidor" });
    }
}