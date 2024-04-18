import mongoose from 'mongoose';

const medical_recordSchema = new mongoose.Schema({
    
},{timestamps: true});

export const MedicalRecord = mongoose.model('MedicalRecord', medical_recordSchema);