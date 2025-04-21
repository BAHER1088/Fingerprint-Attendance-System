import mongoose, {Document}from 'mongoose';

export interface attendance extends Document{
    name:string;
    studentID: string;
    timestamp:Date;
    department: string,
    currentYear: string,
}