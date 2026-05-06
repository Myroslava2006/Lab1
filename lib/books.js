export const books = [
  { id: 1, title: '1984', author: 'Джордж Орвелл', description: 'Антиутопія про тоталітарне суспільство та контроль інформації.', year: 1949, emoji: '📕', genre: 'Фантастика', available: true, pages: 328 },
  { id: 2, title: 'Кобзар', author: 'Тарас Шевченко', description: 'Збірка поезій класика української літератури.', year: 1840, emoji: '📗', genre: 'Поезія', available: false, pages: 352 },
  { id: 3, title: 'Гаррі Поттер', author: 'Джоан Роулінг', description: 'Фентезійна історія про школу магії та дружбу.', year: 1997, emoji: '🪄', genre: 'Фантастика', available: true, pages: 432 },
  { id: 4, title: 'Маленький принц', author: 'Антуан де Сент-Екзюпері', description: 'Філософська казка для дітей і дорослих.', year: 1943, emoji: '⭐', genre: 'Художня література', available: true, pages: 96 },
  { id: 5, title: 'Коротка історія часу', author: 'Стівен Гокінг', description: 'Науково-популярна книга про Всесвіт, час і чорні діри.', year: 1988, emoji: '🌌', genre: 'Наука', available: true, pages: 256 },
  { id: 6, title: 'Історія України', author: 'Орест Субтельний', description: 'Огляд ключових подій історії України.', year: 1991, emoji: '🏛️', genre: 'Історія', available: false, pages: 720 },
  { id: 7, title: '451° за Фаренгейтом', author: 'Рей Бредбері', description: 'Роман про суспільство, де книги заборонені.', year: 1953, emoji: '🔥', genre: 'Фантастика', available: true, pages: 208 },
  { id: 8, title: 'Лісова пісня', author: 'Леся Українка', description: 'Драма-феєрія про кохання, природу і свободу.', year: 1911, emoji: '🌿', genre: 'Поезія', available: true, pages: 128 },
]

export function getBookById(id) {
  return books.find((book) => book.id === Number(id))
}

export function getGenres() {
  return ['Всі', ...new Set(books.map((item) => item.genre))]
}
