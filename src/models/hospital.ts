import { Schema, model, Document } from "mongoose";

const HospitalSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    patients: {
        type: Number,
        required: true,
        default: 0
    },
    maxPatients: {
        type: Number,
        required: true
    },
    staff: {
        type: Number,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    updateDate: {
        type: Date
    }
});

interface IHospitalSchema extends Document {
    name: string;
    patients: number;
    maxPatients: number;
    staff: number;
    creationDate: Date;
    updateDate: Date;
};

export default model<IHospitalSchema>('Hospital', HospitalSchema);