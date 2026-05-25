import { z } from "zod";

export const createBookSchema = z.object({
  title: z.string().min(2, "Назва має містити мінімум 2 символи").max(100).trim(),
  author: z.string().min(2, "Автор має містити мінімум 2 символи").max(100).trim(),
  category: z.string().min(2, "Оберіть категорію").max(50).trim(),
  year: z.coerce.number().int("Рік має бути цілим числом").min(1000, "Невалідний рік").max(new Date().getFullYear(), "Рік не може бути у майбутньому").optional(),
  available: z.boolean().optional().default(true),
});
