// Спільні дані бібліотеки
// Тиждень 6: CRUD функції для API Routes

let books = [
  { id: 1, title: '1984', author: 'Джордж Орвелл', description: 'Антиутопія про тоталітарне суспільство.', year: 1949, pages: 328, emoji: '📕', category: 'Фантастика', genre: 'fiction', available: true },
  { id: 2, title: 'Кобзар', author: 'Тарас Шевченко', description: 'Збірка поезій українського класика.', year: 1840, pages: 240, emoji: '📗', category: 'Поезія', genre: 'poetry', available: false },
  { id: 3, title: 'Гаррі Поттер', author: 'Дж. К. Ролінґ', description: 'Фентезійна історія про школу магії.', year: 1997, pages: 350, emoji: '🪄', category: 'Фантастика', genre: 'fiction', available: true },
  { id: 4, title: 'Коротка історія часу', author: 'Стівен Гокінг', description: 'Популярна наука про Всесвіт.', year: 1988, pages: 256, emoji: '🔭', category: 'Наука', genre: 'science', available: true },
  { id: 5, title: 'Історія України', author: 'Орест Субтельний', description: 'Огляд історії України від давнини до сучасності.', year: 1991, pages: 720, emoji: '🏛️', category: 'Історія', genre: 'history', available: true },
  { id: 6, title: 'Маленький принц', author: 'Антуан де Сент-Екзюпері', description: 'Філософська казка для дітей і дорослих.', year: 1943, pages: 96, emoji: '⭐', category: 'Художня література', genre: 'fiction', available: true },
  { id: 7, title: 'Sapiens', author: 'Ювал Ной Харарі', description: 'Історія людства від давнини до сьогодення.', year: 2011, pages: 464, emoji: '🧠', category: 'Історія', genre: 'non-fiction', available: false },
  { id: 8, title: 'Чиста архітектура', author: 'Роберт Мартін', description: 'Книга про принципи якісного програмного забезпечення.', year: 2017, pages: 432, emoji: '💻', category: 'Наука', genre: 'science', available: true },
]

let nextId = 9

export { books }

export function getBookById(id) {
  return books.find((book) => book.id === Number(id))
}

export function getCategories() {
  return ['Всі', ...new Set(books.map((item) => item.category))]
}

export function addBook(data) {
  const currentYear = new Date().getFullYear()
  const newBook = {
    id: nextId++,
    title: String(data.title || '').trim(),
    author: String(data.author || '').trim(),
    description: data.description || '',
    year: Number(data.year) || currentYear,
    pages: Number(data.pages) || 1,
    emoji: data.emoji || '📘',
    category: data.category || 'Інше',
    genre: data.genre || 'other',
    available: data.available !== undefined ? data.available : true,
  }
  books.push(newBook)
  return newBook
}

export function updateBook(id, data) {
  const index = books.findIndex((book) => book.id === Number(id))
  if (index === -1) return null

  books[index] = {
    ...books[index],
    ...data,
    id: books[index].id,
    title: data.title !== undefined ? String(data.title).trim() : books[index].title,
    author: data.author !== undefined ? String(data.author).trim() : books[index].author,
    year: data.year !== undefined ? Number(data.year) : books[index].year,
    pages: data.pages !== undefined ? Number(data.pages) : books[index].pages,
  }
  return books[index]
}

export function deleteBook(id) {
  const index = books.findIndex((book) => book.id === Number(id))
  if (index === -1) return null

  const deleted = books[index]
  books.splice(index, 1)
  return deleted
}

export function validateBookData(body) {
  const currentYear = new Date().getFullYear()
  if (!body.title || !body.author || !body.category) return 'Поля title, author та category є обов’язковими'
  if (String(body.title).trim().length < 2 || String(body.title).trim().length > 200) return 'Назва має містити 2-200 символів'
  if (String(body.author).trim().length < 2 || String(body.author).trim().length > 100) return 'Автор має містити 2-100 символів'
  if (body.year && (Number(body.year) < 1000 || Number(body.year) > currentYear)) return 'Рік має бути від 1000 до поточного року'
  if (body.pages && Number(body.pages) < 1) return 'Кількість сторінок має бути більше 0'
  if (body.description && String(body.description).length > 1000) return 'Опис не може перевищувати 1000 символів'
  return null
}
