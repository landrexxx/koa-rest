import { z } from 'zod';

export const userCreateValidation = z.object(
    {
        firstName: z.string()
            .min(3, 'Name must be at least 3 characters')
            .regex(/^[A-Za-z\s]+$/, 'Name cannot contain numbers or special characters'),
        email: z.string().email('Invalid email address'),
        password: z.string().min(6)
    }
).strict();

export type UserCreateValidation = z.infer<typeof userCreateValidation>;