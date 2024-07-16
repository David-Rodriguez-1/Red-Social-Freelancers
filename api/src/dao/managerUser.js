import { connection1 } from "../models/connections.js"
import { user } from "../models/user.js"

export class ManagerUser {

    static async connection({ user_id, connected_user_id }) {

        try {

            const newConn = await connection1.create({
                user_id: user_id,
                connected_user_id: connected_user_id
            })

            const followerUser = await user.findByIdAndUpdate(
                user_id,
                {
                    $push: { following: newConn.connected_user_id }
                },
                { new: true }
            )
            const followedUser = await user.findByIdAndUpdate(
                connected_user_id,
                { $push: { followers: user_id } },
                { new: true }
            )

            return { followerUser, followedUser }

        } catch (error) {

            console.log({ message: error })
            return res.status(400).json(error.message)

        }

    }
    static async unfollowUser({ user_id, connected_user_id }) {
        
        await connection1.findOneAndDelete({
            user_id,
            connected_user_id
        })

        await user.findByIdAndUpdate(
            user_id,
            { $pull: { following: connected_user_id } },
            { new: true }
        )

        await user.findByIdAndUpdate(
            connected_user_id,
            { $pull: { followers: user_id } },
            { new: true }
        )
        return { message: 'Conexión eliminada' }
    }
    static async getUsers() {

        try {

            const users = await user.find({}).populate('Connection')
            return users

        } catch (error) {

            console.error('Error al recuperar los usuarios:', error)
            return res.status(400).json(error.message)
        }
    }


}