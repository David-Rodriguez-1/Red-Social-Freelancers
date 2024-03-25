const mongoose = require('mongoose')

  const ConnectionsSchema = new mongoose.Schema({
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    connected_user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    connection_type: {
      type: String,
      enum: ['Following', 'Follower'],
      required: true
    }
  })

module.exports = ConnectionsSchema
