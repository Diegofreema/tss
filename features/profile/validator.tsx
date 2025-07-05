import { z } from 'zod';

export const updateSchema = z.object({
  city: z.string().min(1, { message: 'City is required' }),
  phone: z.string().min(1, { message: 'Phone number is required' }),
  profesion: z.string().min(1, { message: 'Profession is required' }),
  address: z.string().min(1, { message: 'Address is required' }),
  address2: z.string().optional(),
  states: z.string().min(1, { message: 'State is required' }),
});
