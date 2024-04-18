import mongoose from 'mongoose';

const docterSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    salary: {
        type: Number,
        required:true
    },
    qualification: {
        type: String,
        required:true
    },
    experiance: {
        type: Number,
        required:true,
        default: 0
    },
    workInHospital: [
        {
            type: mongoose.Schema.Types.OnjectId,
            ref: 'Hospital'
        }
    ],
},{timestamps: true});

export const Docter = mongoose.model('Docter',docterSchema);