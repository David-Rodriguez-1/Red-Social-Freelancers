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
    }
  })

module.exports = ConnectionsSchema
