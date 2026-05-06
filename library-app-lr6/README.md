# LR6 — API Routes в Next.js

Тема: **Система управління бібліотекою**.

Реалізовано:
- `/api/test` — тестовий API Route
- `/api/books` — GET список книг, POST створення книги
- `/api/books/[id]` — GET, PUT, DELETE для однієї книги
- Dashboard отримує книги через API (`fetch`)
- Форма створення книги через POST
- Видалення книги через DELETE
- Фільтрація API через `?category=` та `?search=`

Запуск:

```bash
npm install
npm run dev
```

Перевірка:
- http://localhost:3000/api/test
- http://localhost:3000/api/books
- http://localhost:3000/api/books?category=Наука
- http://localhost:3000/api/books?search=1984
- http://localhost:3000/dashboard/books
