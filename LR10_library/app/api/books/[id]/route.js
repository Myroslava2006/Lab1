import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Book from "@/models/Book";
import { authorize } from "@/lib/authorize";
import { updateBookSchema } from "@/lib/validations/book";
import { sanitizeObject } from "@/lib/sanitize";

export async function GET(request, { params }) {
  await dbConnect();

  try {
    const { id } = await params;
    const book = await Book.findById(id);

    if (!book) {
      return NextResponse.json({ error: "Книгу не знайдено" }, { status: 404 });
    }

    return NextResponse.json(book);
  } catch (error) {
    return NextResponse.json({ error: "Помилка сервера" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const { error } = await authorize("admin");
  if (error) return error;

  await dbConnect();

  try {
    const { id } = await params;
    const data = await request.json();
    const result = updateBookSchema.safeParse(data);

    if (!result.success) {
      const messages = result.error.errors.map((e) => e.message);
      return NextResponse.json({ errors: messages }, { status: 400 });
    }

    const sanitized = sanitizeObject(result.data);
    const book = await Book.findByIdAndUpdate(id, sanitized, {
      new: true,
      runValidators: true,
    });

    if (!book) {
      return NextResponse.json({ error: "Книгу не знайдено" }, { status: 404 });
    }

    return NextResponse.json(book);
  } catch (error) {
    return NextResponse.json({ error: "Помилка сервера" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { error } = await authorize("admin");
  if (error) return error;

  await dbConnect();

  try {
    const { id } = await params;
    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return NextResponse.json({ error: "Книгу не знайдено" }, { status: 404 });
    }

    return NextResponse.json({ message: "Книгу видалено" });
  } catch (error) {
    return NextResponse.json({ error: "Помилка сервера" }, { status: 500 });
  }
}
