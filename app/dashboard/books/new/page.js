'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewBookPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ title: "", author: "", genre: "", year: "", pages: "", description: "" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log("Створення книги:", formData); router.push("/dashboard/books"); };
  return (
    <div>
      <Link href="/dashboard/books" className="link">← Назад до списку</Link>
      <form onSubmit={handleSubmit} className="form">
        <h1>Додати нову книгу</h1>
        <div className="form-grid">
          <div><label>Назва *</label><input className="input" name="title" value={formData.title} onChange={handleChange} required /></div>
          <div><label>Автор *</label><input className="input" name="author" value={formData.author} onChange={handleChange} required /></div>
          <div><label>Жанр *</label><input className="input" name="genre" value={formData.genre} onChange={handleChange} required /></div>
          <div><label>Рік *</label><input className="input" type="number" name="year" value={formData.year} onChange={handleChange} required /></div>
          <div><label>Кількість сторінок *</label><input className="input" type="number" name="pages" value={formData.pages} onChange={handleChange} required /></div>
        </div>
        <div><label>Опис</label><textarea className="textarea" name="description" value={formData.description} onChange={handleChange} rows="4" /></div>
        <div className="actions"><button type="submit" className="btn green">Створити</button><Link href="/dashboard/books" className="btn gray">Скасувати</Link></div>
      </form>
    </div>
  );
}
