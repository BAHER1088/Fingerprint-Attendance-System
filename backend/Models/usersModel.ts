import mongoose, { Schema, Document } from 'mongoose';
import { users } from "../Interfaces/usersInterface";

const usersSchema: Schema = new Schema<users>({
    name: { type: String, required: true, trim: true },
    studentID: { type: String, required: true, unique: true, trim: true },
    department: { type: String, required: true, enum: ["ECE", "CSE", "EPE"], trim: true },
    fingerId: { type: Number, unique: true, required: true },
    currentYear: { type: String, required: true, enum: ["4th", "3rd", "2nd", "1st", "prep"], trim: true }
}, { timestamps: true });

const usersModel = mongoose.model<users>('User', usersSchema);
export default usersModel;