import * as z from 'zod';

const schema = z.object({
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .min(1, { message: 'Email is required' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 8 characters' })
});

export default schema;
