const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
// Form Validation done in the modiel using required: true/false
const ReviewSchema = new Schema(
  {
    user: {
      userName: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
    },
    review: {
      comment: { type: String, required: false, trim: true },
      rating: { type: Number, required: true },
    },
    approved: { type: Boolean, default: false },
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  },
)

module.exports = mongoose.model('Review', ReviewSchema)
