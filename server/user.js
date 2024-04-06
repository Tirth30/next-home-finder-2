const mongoose = require('mongoose');

// Define a schema for the property listings
const propertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    imageUrl: String, // URL for property image
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Define a model for the property schema
const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
