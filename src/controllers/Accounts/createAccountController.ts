import prisma from '../../prisma/client';
import jwt from 'jsonwebtoken';
import IuserSignInUp from '../../interfaces/IuserSignInUp';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

export default class CreateAccountController {
    async handle(req: Request, res: Response) {
        const { discordId, password }: IuserSignInUp = req.body;
        const checkUser = await prisma.user.findFirst({
            where: {
                discordId,
            },
        });
        if (!discordId || !password) {
            return res.status(400).send({ message: 'All fields are required' });
        }
        if (checkUser) {
            return res.status(400).send({ message: 'User already exists' });
        }
    }
}
