import { z } from "zod";

const objectIdSchema = z
  .string()
  .regex(/^[a-fA-F0-9]{24}$/);

const borrowItemInputSchema = z.object({
  book: objectIdSchema,
  quantity: z.number().int().min(1).max(5),
});

export const createBorrowSchema = z.object({
  user: objectIdSchema.optional(),

  items: z
    .array(borrowItemInputSchema)
    .min(1)
    .max(10),

  notes: z.string().max(300).trim().optional(),
});
