import mongoose from 'mongoose';

const productSchema  = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
    },
    stock: {
        default: 0,
        type: Number
    },
    catagory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Catagory',
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    
},{timestamps: true});

export const Product = mongoose.model('Product',productSchema);