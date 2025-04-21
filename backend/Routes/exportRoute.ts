import { Router } from "express";
import { exportAttendanceToCSV1 } from '../controllers/ExportController';

const exportRoute: Router = Router();
exportRoute.get('/export2csv', exportAttendanceToCSV1);
export default exportRoute;