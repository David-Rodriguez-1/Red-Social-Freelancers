const mongoose = require('mongoose')
// const mongoosePaginate = require('mongoose-paginate')

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
      enum: ['Siguiendo', 'Amigo', 'Otro'],
      required: true
    }
  })

// ConnectionsSchema.plugin(mongoosePaginate)

// const modelConnections = mongoose.model('SampleModel', ConnectionsSchema)

// modelConnections.paginate().then({}) // Usage

module.exports = ConnectionsSchema
