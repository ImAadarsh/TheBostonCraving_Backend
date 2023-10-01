const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  orderedItems: [
    {
      foodItemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish',
        required: true,
      },
      deliveryDates: {
        type: Date
      }, // Array to store delivery dates
    },
  ],
    orderDate: {
        type: Date,
        default: Date.now,
    },
    tip: {
        type: Number,
        default: null,
    },
    totalPaid: {
        type: Number,
        default: null,
    },
    shipping: {
        type: Number,
        default: null,
    },
    isPlaced: {
        type: Boolean,
        default: false,
    },
    paymentId: {
        type: String,
        default: null,
    },
    cardNumber: {
        type: String,
        default: null,
    },
    address: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: false,
    },
    state: {
        type: String,
        required: false,
    },
    zipCode: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('placedOrder', orderSchema);
