import dbConnect from "@/lib/db";

import Borrow from "@/lib/models/Borrow";
import BorrowItem from "@/lib/models/BorrowItem";
import Book from "@/lib/models/Book";

import { authorize } from "@/lib/authorize";

import { createBorrowSchema }
  from "@/lib/validations/borrow";

export async function GET() {
  const { session, error } = await authorize();

  if (error) return error;

  await dbConnect();

  const filter =
    session.user.role === "admin"
      ? {}
      : { user: session.user.id };

  const borrows = await Borrow.find(filter)
    .populate("user")
    .populate({
      path: "items",
      populate: {
        path: "book",
      },
    });

  return Response.json(borrows);
}
