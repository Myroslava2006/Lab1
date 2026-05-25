import { z } from "zod";

export const createBookSchema = z.object({
  title: z
    .string({ required_error: "Назва книги обов'язкова" })
    .min(1, "Назва книги обов'язкова")
    .max(150, "Максимум 150 символів")
    .trim(),
  author: z
    .string({ required_error: "Автор обов'язковий" })
    .min(2, "Автор має містити мінімум 2 символи")
    .max(100, "Максимум 100 символів")
    .trim(),
  description: z
    .string()
    .max(700, "Максимум 700 символів")
    .trim()
    .optional()
    .default(""),
  year: z
    .number({ invalid_type_error: "Рік має бути числом" })
    .int("Рік має бути цілим числом")
    .min(1000, "Рік має бути не менше 1000")
    .max(new Date().getFullYear(), "Рік не може бути у майбутньому")
    .optional(),
  genre: z.enum(["Роман", "Фантастика", "Детектив", "Наука", "Історія", "Інше"], {
    errorMap: () => ({
      message: "Жанр має бути: Роман, Фантастика, Детектив, Наука, Історія або Інше",
    }),
  }),
  isbn: z
    .string()
    .max(20, "ISBN максимум 20 символів")
    .trim()
    .optional()
    .default(""),
  emoji: z.string().max(10).optional().default("📚"),
  available: z.boolean().optional().default(true),
});

export const updateBookSchema = createBookSchema.partial();
