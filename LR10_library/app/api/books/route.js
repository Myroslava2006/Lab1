import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Book from "@/models/Book";
import { authorize } from "@/lib/authorize";
import { createBookSchema } from "@/lib/validations/book";
import { sanitizeObject } from "@/lib/sanitize";

export async function GET() {
  await dbConnect();
  const books = await Book.find({}).sort({ createdAt: -1 });
  return NextResponse.json(books);
}

export async function POST(request) {
  const { error } = await authorize("admin");
  if (error) return error;

  await dbConnect();

  try {
    const data = await request.json();
    const result = createBookSchema.safeParse(data);

    if (!result.success) {
      const messages = result.error.errors.map((e) => e.message);
      return NextResponse.json({ errors: messages }, { status: 400 });
    }

    const sanitized = sanitizeObject(result.data);
    const book = await Book.create(sanitized);

    return NextResponse.json(book, { status: 201 });
  } catch (error) {
    if (
      error.message === "Unexpected end of JSON input" ||
      error instanceof SyntaxError
    ) {
      return NextResponse.json(
        { error: "Невалідний JSON у тілі запиту" },
        { status: 400 }
      );
    }

    return NextResponse.json({ error: "Помилка сервера" }, { status: 500 });
  }
}
