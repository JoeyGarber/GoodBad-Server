const mongoose = require('mongoose')

const thingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    likers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    dislikers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Thing', thingSchema)
