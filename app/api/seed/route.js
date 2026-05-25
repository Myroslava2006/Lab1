import dbConnect from '@/lib/db'
import Book from '@/lib/models/Book'

const initialBooks = [
  {
    title: 'Гаррі Поттер і філософський камінь',
    author: 'Дж. К. Ролінґ',
    description: 'Перша книга про хлопчика-чарівника та школу Гоґвортс.',
    year: 1997,
    genre: 'Фентезі',
    available: true,
  },
  {
    title: 'Шерлок Голмс: Етюд у багряних тонах',
    author: 'Артур Конан Дойл',
    description: 'Перша історія про детектива Шерлока Голмса.',
    year: 1887,
    genre: 'Детектив',
    available: true,
  },
  {
    title: 'Тіні забутих предків',
    author: 'Михайло Коцюбинський',
    description: 'Класичний український твір про любов і традиції гуцулів.',
    year: 1911,
    genre: 'Роман',
    available: true,
  },
  {
    title: 'Коротка історія часу',
    author: 'Стівен Гокінґ',
    description: 'Науково-популярна книга про Всесвіт, час і чорні діри.',
    year: 1988,
    genre: 'Наукова література',
    available: false,
  },
  {
    title: 'Історія України-Руси',
    author: 'Михайло Грушевський',
    description: 'Фундаментальна праця з історії України.',
    year: 1898,
    genre: 'Історія',
    available: true,
  },
]

export async function GET() {
  try {
    await dbConnect()

    await Book.deleteMany({})
    const books = await Book.create(initialBooks)

    return Response.json({
      message: `Базу наповнено: ${books.length} книг`,
      books,
    })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
