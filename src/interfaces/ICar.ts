import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

// https://github.com/colinhacks/zod#extend
const carZodSchema = vehicleZodSchema.extend({
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(7),
});

export type ICar = z.infer<typeof carZodSchema>;