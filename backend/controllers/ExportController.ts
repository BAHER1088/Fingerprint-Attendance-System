import { Request, Response } from 'express';
import json2csv from 'json2csv';
import AttendanceModel from '../Models/attendanceModel';
import asyncHandler from 'express-async-handler';
import usersModel from '../Models/usersModel';
import { Parser as Json2csvParser } from 'json2csv';
import { Parser } from 'json2csv';
import moment from 'moment-timezone';


export const exportAttendanceToCSV = asyncHandler(async (req: Request, res: Response) => {
  // Fetch all attendance logs from MongoDB
  const attendanceLogs = await AttendanceModel.find();
  // Map and populate student names manually
  const csvData = await Promise.all(attendanceLogs.map(async log => {
    const student = await usersModel.findOne({ studentID: log.studentID });
    return {
      studentID: `${log.studentID}`, // Prevent Excel from converting it to scientific notation
      studentName: student?.name || "Unknown",
      timestamp: moment(log.timestamp).tz('Africa/Cairo').format('YYYY-MM-DD HH:mm')
    };
  }));

  // Convert the JSON data into CSV
  const json2csv = new Json2csvParser();
  const csv = json2csv.parse(csvData);

  // Set headers for file download
  res.header('Content-Type', 'text/csv');
  res.attachment('attendance_logs.csv');
  res.send(csv);
});


export const exportAttendanceToCSV1 = asyncHandler(async (req: Request, res: Response) => {
  const { date, from, to, department, currentYear } = req.query;

  const filter: any = {};

  // 🔹 Filter by single day
  if (date) {
    const start = new Date(date as string);
    const end = new Date(date as string);
    end.setHours(23, 59, 59, 999);
    filter.timestamp = { $gte: start, $lte: end };
  }

  // 🔹 Filter by range
  if (from && to) {
    filter.timestamp = {
      $gte: new Date(from as string),
      $lte: new Date(to as string),
    };
  }

  // 🔹 Optional filters for department and year
  if (department) filter.department = department;
  if (currentYear) filter.currentYear = currentYear;

  const logs = await AttendanceModel.find(filter).sort({ timestamp: 1 });

  // Map to CSV format
  const csvData = logs.map(log => ({
    studentID: `${log.studentID}`, // To preserve long ID in Excel
    studentName: log.name,
    department: log.department,
    currentYear: log.currentYear,
    timestamp: moment(log.timestamp).tz("Africa/Cairo").format("M/D/YYYY HH:mm"),
  }));

  const parser = new Parser({ fields: ['studentID', 'studentName', 'department', 'currentYear', 'timestamp'] });
  const csv = parser.parse(csvData);

  res.header('Content-Type', 'text/csv');
  res.attachment('attendance_logs.csv');
  res.send(csv);
});