import { Request, Response, NextFunction } from 'express';
import AttendanceModel from '../Models/attendanceModel';
import usersModel from '../Models/usersModel';
import { verifyFingerprint } from './FingerprintController';
import asyncHandler from 'express-async-handler';

interface PopulatedAttendance {
  studentID: {
    name: string;
    studentID: string;
    department: string;
  };
  courseID: string;
  timestamp: Date;
}


export const markAttendance = asyncHandler(async (req: Request, res: Response): Promise<any> => {

  const fingerId = await verifyFingerprint();

  if (!fingerId) {
    return res.status(400).json({ message: "Error in fingerprint, Please try again" });
  }


  const student = await usersModel.findOne({ fingerId });

  if (!student) {
    return res.status(404).json({ message: "Student not found for this fingerprint" });
  }
  if (student.department != req.body.department || student.currentYear != req.body.currentYear) {
    return res.status(404).json({ message: "The student does not belong to this class" });
  }

  const Attendance = new AttendanceModel({
    name: student.name,
    studentID: student.studentID,
    department: student.department,
    currentYear: student.currentYear,
    timestamp: new Date()
  });

  await Attendance.save();

  res.status(201).json({
    message: "Attendance marked successfully",
    student: {
      name: student.name,
      studentId: student.studentID,
      department: student.department,
      currentYear: student.currentYear
    }
  });

});

