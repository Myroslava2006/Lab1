"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import Link from "next/link";
import { createBorrowSchema } from "@/lib/validations/borrow";
import FormField from "@/components/forms/FormField";

export default function BorrowForm() {
  const router = useRouter();
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === "admin";
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [loadingBooks, setLoadingBooks] = useState(true);

  const { register, control, handleSubmit, watch, setValue, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(createBorrowSchema),
    defaultValues: { user: "", items: [{ book: "", quantity: 1 }], notes: "" },
  });
  const { fields, append, remove } = useFieldArray({ control, name: "items" });

  useEffect(() => { fetch("/api/books").then(r=>r.json()).then(d=>{ setBooks((d||[]).filter(b=>b.available)); setLoadingBooks(false); }).catch(()=>setLoadingBooks(false)); }, []);
  useEffect(() => { if (!isAdmin) return; fetch("/api/users").then(r=>r.json()).then(d=>{ if(Array.isArray(d)) setUsers(d); }).catch(()=>{}); }, [isAdmin]);
  useEffect(() => { if (isAdmin && session?.user?.id) setValue("user", session.user.id); }, [isAdmin, session?.user?.id, setValue]);

  const watchedItems = watch("items");
  const totalBooks = useMemo(() => (watchedItems || []).reduce((sum, item) => sum + Number(item?.quantity || 0), 0), [watchedItems]);

  const onSubmit = async (data) => {
    const payload = isAdmin && data.user ? data : { ...data, user: undefined };
    try {
      const res = await fetch("/api/borrows", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.errors?.join(", ") || body.error || "Не вдалося створити видачу");
      toast.success("Видачу створено");
      router.push(body._id ? `/dashboard/borrows/${body._id}` : "/dashboard/borrows");
      router.refresh();
    } catch (e) { toast.error(e.message); }
  };

  if (loadingBooks) return <div className="bg-white rounded-lg shadow p-8 text-gray-500">Завантаження книг...</div>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg shadow">
      {isAdmin && <FormField label="Читач" required error={errors.user?.message}><select {...register("user")} className="w-full px-4 py-2 border rounded"><option value="">Оберіть користувача</option>{users.map(u=><option key={u._id} value={u._id}>{u.name} ({u.email})</option>)}</select></FormField>}
      <div><div className="flex justify-between items-center mb-3"><label className="block text-gray-700 font-bold">Книги для видачі *</label><button type="button" onClick={()=>append({ book: "", quantity: 1 })} className="text-amber-700 hover:underline text-sm font-medium">+ Додати книгу</button></div>
      <div className="space-y-3">{fields.map((field,index)=>{ const itemErrors=errors.items?.[index]; return <div key={field.id} className="flex gap-3 items-start bg-gray-50 p-3 rounded border"><div className="flex-1"><select {...register(`items.${index}.book`)} className="w-full px-3 py-2 border rounded"><option value="">Оберіть книгу</option>{books.map(book=><option key={book._id} value={book._id}>{book.title} — {book.author}</option>)}</select>{itemErrors?.book && <p className="text-xs text-red-600 mt-1">{itemErrors.book.message}</p>}</div><div className="w-24"><input type="number" min={1} max={5} {...register(`items.${index}.quantity`, { valueAsNumber: true })} className="w-full px-3 py-2 border rounded" />{itemErrors?.quantity && <p className="text-xs text-red-600 mt-1">{itemErrors.quantity.message}</p>}</div><button type="button" onClick={()=>remove(index)} disabled={fields.length===1} className="text-red-600 hover:text-red-800 disabled:text-gray-300 text-lg px-2">×</button></div>; })}</div></div>
      <FormField label="Коментар" error={errors.notes?.message}><textarea rows="3" maxLength={300} {...register("notes")} className="w-full px-4 py-2 border rounded" /></FormField>
      {totalBooks > 0 && <div className="bg-amber-50 border border-amber-200 px-4 py-3 rounded"><strong>Усього книг:</strong> <span className="text-xl font-bold text-amber-700">{totalBooks}</span></div>}
      <div className="flex gap-4"><button type="submit" disabled={isSubmitting} className="bg-amber-700 text-white px-6 py-3 rounded font-bold disabled:opacity-50">{isSubmitting ? "Створення..." : "Створити видачу"}</button><Link href="/dashboard/borrows" className="bg-gray-300 text-gray-700 px-6 py-3 rounded">Скасувати</Link></div>
    </form>
  );
}
