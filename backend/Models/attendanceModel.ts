import mongoose, { Schema, Document } from 'mongoose';
import { attendance } from "../Interfaces/attendanceInterface";

const attendanceSchema: Schema = new Schema<attendance>({
    name: { type: String, required: true, ref: "User" },
    studentID: { type: String, required: true, ref: "User" },
    currentYear: { type: String, ref: "User", trim: true },
    department: { type: String, ref: "User", trim: true },
    timestamp: { type: Date, default: Date.now }
}, { timestamps: true });

const AttendanceModel = mongoose.model<attendance>('Attendance', attendanceSchema);

export default AttendanceModel; 