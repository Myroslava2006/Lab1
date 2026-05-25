import bcrypt from 'bcryptjs'
import dbConnect from '@/app/lib/db'
import Book from '@/app/lib/models/Book'
import User from '@/app/lib/models/User'

export async function GET() {
  await dbConnect()

  await Book.deleteMany({})
  const books = await Book.insertMany([
    {
      title: 'Кобзар',
      author: 'Тарас Шевченко',
      genre: 'Поезія',
      year: 1840,
      available: true,
      description: 'Класична збірка української поезії.',
    },
    {
      title: 'Лісова пісня',
      author: 'Леся Українка',
      genre: 'Драма',
      year: 1911,
      available: true,
      description: 'Драма-феєрія української літератури.',
    },
    {
      title: 'Захар Беркут',
      author: 'Іван Франко',
      genre: 'Історичний роман',
      year: 1883,
      available: false,
      description: 'Історична повість про громаду та свободу.',
    },
  ])

  await User.deleteMany({})
  const hashedPassword = await bcrypt.hash('password123', 10)

  const users = await User.insertMany([
    {
      name: 'Адміністратор бібліотеки',
      email: 'admin@test.com',
      password: hashedPassword,
      role: 'admin',
    },
    {
      name: 'Читач бібліотеки',
      email: 'user@test.com',
      password: hashedPassword,
      role: 'user',
    },
  ])

  return Response.json({
    message: 'Seed виконано',
    books: books.length,
    users: users.length,
    testAccounts: [
      { email: 'admin@test.com', password: 'password123', role: 'admin' },
      { email: 'user@test.com', password: 'password123', role: 'user' },
    ],
  })
}
