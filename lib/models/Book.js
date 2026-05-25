import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Назва книги обов’язкова'],
    trim: true,
    maxlength: [150, 'Назва не може бути довшою за 150 символів'],
  },
  author: {
    type: String,
    required: [true, 'Автор книги обов’язковий'],
    trim: true,
    maxlength: [100, 'Автор не може бути довшим за 100 символів'],
  },
  description: {
    type: String,
    default: '',
    trim: true,
  },
  year: {
    type: Number,
    required: [true, 'Рік видання обов’язковий'],
    min: [0, 'Рік не може бути від’ємним'],
    max: [new Date().getFullYear(), 'Рік не може бути більшим за поточний'],
  },
  genre: {
    type: String,
    enum: {
      values: ['Фентезі', 'Детектив', 'Роман', 'Наукова література', 'Історія', 'Інше'],
      message: 'Оберіть коректний жанр книги',
    },
    default: 'Інше',
  },
  available: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
})

export default mongoose.models.Book || mongoose.model('Book', bookSchema)
