import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Назва книги обов’язкова'],
      trim: true,
      maxlength: [120, 'Назва занадто довга'],
    },
    author: {
      type: String,
      required: [true, 'Автор обов’язковий'],
      trim: true,
    },
    genre: {
      type: String,
      required: [true, 'Жанр обов’язковий'],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, 'Рік видання обов’язковий'],
      min: [1000, 'Невірний рік'],
      max: [2100, 'Невірний рік'],
    },
    available: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },
  },
  { timestamps: true }
)

export default mongoose.models.Book || mongoose.model('Book', bookSchema)
