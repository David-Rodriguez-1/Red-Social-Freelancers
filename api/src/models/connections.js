import mongoose from "mongoose"

  const ConnectionsSchema = new mongoose.Schema({
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    connected_user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
  })

  export const connection1 = mongoose.model('Connection', ConnectionSchema)
