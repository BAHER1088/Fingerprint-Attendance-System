import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import usersModel from '../Models/usersModel';
import { users } from '../Interfaces/usersInterface';
import { enrollFingerprint, verifyFingerprint } from './FingerprintController';
import customErrors from '../Utils/Errors';


export const Registration = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {


    const fingerId = await enrollFingerprint();
    // const fingerId =5;

    if (!fingerId) {
        return next(new customErrors("Fingerprint enrollment failed", 400));
    }
    const user: users = await usersModel.create({ ...req.body, fingerId });

    res.status(201).json({ data: user })


});

export const biometricLogin = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const finger_Id = await verifyFingerprint();
    if (!finger_Id) {
        return next(new customErrors("Fingerprint not found -auth-", 400));
    }

    const user = await usersModel.findOne({ fingerId: finger_Id });
    if (!user) {
        return next(new customErrors("User not found", 404));
    }

});



