import { Document, Types } from 'mongoose';

type Role = 'user' | 'admin' | 'manager';
type AccountType = 'current' | 'savings' | 'foreign_currency';
export interface users extends Document {
    name: string;
    fingerId: number;
    currentYear: string;
    studentID: string;
    department: string;
}
