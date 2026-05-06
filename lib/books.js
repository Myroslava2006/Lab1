export const books = [
  { id: 1, name: "1984", author: "Джордж Орвелл", description: "Антиутопія про тоталітарне суспільство.", year: 1949, pages: 328, emoji: "📕", category: "Фантастика", available: true },
  { id: 2, name: "Кобзар", author: "Тарас Шевченко", description: "Збірка поезій українського класика.", year: 1840, pages: 256, emoji: "📗", category: "Поезія", available: false },
  { id: 3, name: "Гаррі Поттер", author: "Дж. К. Ролінґ", description: "Фентезійна історія про школу магії.", year: 1997, pages: 340, emoji: "🪄", category: "Фантастика", available: true },
  { id: 4, name: "Коротка історія часу", author: "Стівен Гокінґ", description: "Популярна книга про Всесвіт і фізику.", year: 1988, pages: 212, emoji: "🔭", category: "Наука", available: true },
  { id: 5, name: "Маленький принц", author: "Антуан де Сент-Екзюпері", description: "Філософська казка для дітей і дорослих.", year: 1943, pages: 96, emoji: "⭐", category: "Художня література", available: true },
  { id: 6, name: "Історія України", author: "Орест Субтельний", description: "Огляд історії України від давніх часів.", year: 1991, pages: 720, emoji: "🏛️", category: "Історія", available: true },
  { id: 7, name: "451° за Фаренгейтом", author: "Рей Бредбері", description: "Роман про суспільство, де заборонені книги.", year: 1953, pages: 208, emoji: "🔥", category: "Фантастика", available: false },
  { id: 8, name: "Лісова пісня", author: "Леся Українка", description: "Драма-феєрія про кохання і свободу.", year: 1911, pages: 144, emoji: "🌿", category: "Поезія", available: true }
];

export function getBookById(id) {
  return books.find((book) => book.id === Number(id));
}

export function getCategories() {
  return ["Всі", ...new Set(books.map((item) => item.category))];
}
