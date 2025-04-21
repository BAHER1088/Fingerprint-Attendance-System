import { Application, Request, Response, NextFunction } from "express";
import customErrors from "../Utils/Errors";
import userRoute from './userRoute';
import authRoute from './authRoute'
import attendanceRoute from './attendanceRoutes'
import exportRoute from "./exportRoute";

const AllRoutes = (app: Application): void => {
  app.use('/api/v1/users', userRoute);
  app.use('/api/v1/auth', authRoute);
  app.use('/api/v1/attendance', attendanceRoute);
  app.use('/api/v1/export', exportRoute);
  app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new customErrors(`The router ${req.originalUrl} is not found`, 400));
  })
}
export default AllRoutes;
