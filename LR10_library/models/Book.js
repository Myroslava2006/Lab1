import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Назва книги обов'язкова"],
      trim: true,
      maxlength: [150, "Максимум 150 символів"],
    },
    author: {
      type: String,
      required: [true, "Автор обов'язковий"],
      trim: true,
      maxlength: [100, "Максимум 100 символів"],
    },
    description: {
      type: String,
      default: "",
      trim: true,
      maxlength: [700, "Максимум 700 символів"],
    },
    year: {
      type: Number,
      min: [1000, "Рік має бути не менше 1000"],
      max: [new Date().getFullYear(), "Рік не може бути у майбутньому"],
    },
    genre: {
      type: String,
      enum: ["Роман", "Фантастика", "Детектив", "Наука", "Історія", "Інше"],
      required: [true, "Жанр обов'язковий"],
    },
    isbn: {
      type: String,
      default: "",
      trim: true,
      maxlength: [20, "ISBN максимум 20 символів"],
    },
    emoji: {
      type: String,
      default: "📚",
      maxlength: 10,
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Book || mongoose.model("Book", BookSchema);
