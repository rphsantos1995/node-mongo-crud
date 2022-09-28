import { number, z } from 'zod';

export const universitySchema = z.object({
  alpha_two_code: z.string().min(2),
  web_pages: z.string().array(),
  name: z.string().min(3),
  country: z.string().min(3),
  domains: z.string().array(),
  state_province: z.string().min(2).optional(),
});

export const updateSchema = z.object({
  web_pages: z.string().array(),
  name: z.string().min(3),
  domains: z.string().array(),
});

export type University = z.infer<typeof universitySchema>;
export type Update = z.infer<typeof updateSchema>;