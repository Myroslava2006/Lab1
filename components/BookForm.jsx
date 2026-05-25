"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { createBookSchema } from "@/lib/validations/book";
import FormField from "@/components/forms/FormField";

const CATEGORIES = ["Роман", "Поезія", "Драма", "Фантастика", "Детектив", "Навчальна", "Інше"];

export default function BookForm({ mode = "create", initialData, bookId }) {
  const router = useRouter();
  const isEdit = mode === "edit";
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(createBookSchema),
    defaultValues: {
      title: initialData?.title ?? "",
      author: initialData?.author ?? "",
      category: initialData?.category ?? "",
      year: initialData?.year ?? new Date().getFullYear(),
      available: initialData?.available ?? true,
    },
  });

  const onSubmit = async (data) => {
    const url = isEdit ? `/api/books/${bookId}` : "/api/books";
    const method = isEdit ? "PUT" : "POST";
    try {
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || body.errors?.join(", ") || "Не вдалося зберегти книгу");
      toast.success(isEdit ? "Книгу оновлено" : "Книгу додано");
      router.push(isEdit ? `/dashboard/books/${bookId}` : "/dashboard/books");
      router.refresh();
    } catch (e) { toast.error(e.message); }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg shadow">
      <FormField label="Назва книги" required error={errors.title?.message}><input type="text" {...register("title")} className="w-full px-4 py-2 border rounded" /></FormField>
      <FormField label="Автор" required error={errors.author?.message}><input type="text" {...register("author")} className="w-full px-4 py-2 border rounded" /></FormField>
      <FormField label="Категорія" required error={errors.category?.message}>
        <select {...register("category")} className="w-full px-4 py-2 border rounded">
          <option value="">Оберіть категорію</option>{CATEGORIES.map((c)=><option key={c} value={c}>{c}</option>)}
        </select>
      </FormField>
      <FormField label="Рік видання" error={errors.year?.message}><input type="number" {...register("year", { valueAsNumber: true })} className="w-full px-4 py-2 border rounded" /></FormField>
      <FormField><label className="inline-flex items-center gap-2"><input type="checkbox" {...register("available")} className="w-4 h-4" /><span>Доступна для видачі</span></label></FormField>
      <div className="flex gap-4"><button type="submit" disabled={isSubmitting} className="bg-amber-700 text-white px-6 py-3 rounded font-bold disabled:opacity-50">{isSubmitting ? "Збереження..." : isEdit ? "Зберегти зміни" : "Створити"}</button><Link href={isEdit ? `/dashboard/books/${bookId}` : "/dashboard/books"} className="bg-gray-300 text-gray-700 px-6 py-3 rounded font-bold">Скасувати</Link></div>
    </form>
  );
}
