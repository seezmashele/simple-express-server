const mongoose = require('mongoose')

const subscriberShema = new mongoose.Schema({
  name: {
    type: 'string',
    required: true
  },
  subscribedToChannel: {
    type: 'string',
    required: true
  },
  subscribeDate: {
    type: 'date',
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Subscriber', subscriberShema)
