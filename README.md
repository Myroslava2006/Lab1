# LR7 — MongoDB + Next.js для теми «Бібліотека»

Це готові файли для практичної роботи №7, адаптовані під тему **«Бібліотека»**.

## Що є у ZIP

- `lib/db.js` — підключення до MongoDB з кешуванням.
- `lib/models/Book.js` — Mongoose модель книги.
- `app/api/test/route.js` — перевірка підключення MongoDB.
- `app/api/seed/route.js` — наповнення бази початковими книгами.
- `app/api/books/route.js` — `GET` і `POST` для книг.
- `app/api/books/[id]/route.js` — `GET`, `PUT`, `DELETE` для однієї книги.
- `lib/helpers.js` — статистика для Dashboard.
- `components/BookForm.jsx` — reusable форма для створення й редагування.
- `app/dashboard/books/new/page.js` — сторінка створення книги.
- `app/dashboard/books/[id]/edit/page.js` — сторінка редагування книги.
- `components/BookActions.jsx` — кнопки редагування й видалення.
- `.env.example` — приклад змінних середовища.

## Як підключити

1. Встановіть Mongoose:

```bash
npm install mongoose
```

2. Скопіюйте файли з архіву у свій Next.js проєкт.

3. Створіть у корені проєкту файл `.env.local`:

```env
MONGODB_URI=mongodb+srv://student:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/library?retryWrites=true&w=majority
```

4. Перевірте, що `.env.local` є у `.gitignore`.

5. Перезапустіть сервер:

```bash
npm run dev
```

6. Перевірте підключення:

```text
http://localhost:3000/api/test
```

7. Наповніть базу:

```text
http://localhost:3000/api/seed
```

8. Перевірте API:

```text
http://localhost:3000/api/books
http://localhost:3000/api/books?genre=Фентезі
http://localhost:3000/api/books?search=гаррі
```

## Важливо

Якщо у твоєму проєкті з тижня 6 маршрути називалися `/drinks`, можна або замінити їх на `/books`, або перейменувати файли під свою існуючу структуру. У цьому наборі все зроблено правильно саме для теми **«Бібліотека»**.

Для Dashboard треба викликати:

```js
import { getBookStats } from '@/lib/helpers'

export default async function DashboardPage() {
  const stats = await getBookStats()
  // ...
}
```

## GitHub

Перед комітом перевір:

```bash
git status
```

Файл `.env.local` не має потрапити в GitHub.

Команди:

```bash
git checkout -b LR7
git add .
git commit -m "LR7: MongoDB connection, Mongoose model, CRUD with database"
git push -u origin LR7
```
