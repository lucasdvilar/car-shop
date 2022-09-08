import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

// https://github.com/colinhacks/zod#zod-enums
const motorcycleZodSchema = vehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().min(2500),
});

export type IMotorcycle = z.infer<typeof motorcycleZodSchema>;
export { motorcycleZodSchema };
