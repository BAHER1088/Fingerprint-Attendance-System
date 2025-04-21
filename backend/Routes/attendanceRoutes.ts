import { Router } from "express";
import { markAttendance } from "../controllers/attendanceController";
import validatorMiddleware from "../validators/validatorMiddleware";

const attendanceRoute: Router = Router();
attendanceRoute.route('/markAttendance').post(validatorMiddleware, markAttendance);
export default attendanceRoute;