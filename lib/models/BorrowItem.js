import mongoose from "mongoose";

const borrowItemSchema = new mongoose.Schema(
  {
    borrow: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Borrow",
      required: true,
      index: true,
    },

    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
      index: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    dueDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.BorrowItem ||
  mongoose.model("BorrowItem", borrowItemSchema);
