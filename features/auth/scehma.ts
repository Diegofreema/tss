import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .email('A valid email is required')
    .min(1, 'An email is required'),
  password: z.string(),
});
