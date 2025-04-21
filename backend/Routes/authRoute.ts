import { Router } from "express";
import { biometricLogin, Registration } from "../controllers/authController";
import validatorMiddleware from "../validators/validatorMiddleware";

const authRoute: Router = Router();
authRoute.route('/Registration').post(validatorMiddleware, Registration);
authRoute.route('/loginWithFinger').post(validatorMiddleware, biometricLogin);
export default authRoute;