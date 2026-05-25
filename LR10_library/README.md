# ЛР10 — Безпека веб-застосунків

Тема проєкту: **Бібліотека**.

Завдання адаптовано з прикладу викладача: замість `drinks` використано `books`, замість `Drink` — `Book`, замість `lib/validations/drink.js` — `lib/validations/book.js`.

## Що реалізовано

- Додано `zod`-валідацію для книг.
- Додано `zod`-валідацію для реєстрації користувачів.
- Додано `zod`-валідацію для зміни ролі користувача.
- Додано санітизацію рядкових полів через `stripHtml` та `sanitizeObject`.
- Додано безпекові HTTP-заголовки в `next.config.mjs`.
- API книг захищено через `authorize("admin")` для POST, PUT, DELETE.

## Встановлення залежності

```bash
npm install zod
```

## Файли, які треба додати або замінити у проєкті

```text
lib/validations/book.js
lib/validations/user.js
lib/sanitize.js
models/Book.js
app/api/books/route.js
app/api/books/[id]/route.js
app/api/auth/register/route.js
app/api/users/[id]/route.js
next.config.mjs
```

## Приклади тестування

### Невалідна книга

```http
POST /api/books
Content-Type: application/json

{
  "title": "",
  "author": "І",
  "year": 3025,
  "genre": "Комікс"
}
```

Очікувано: `400` з масивом помилок.

### Валідна книга

```http
POST /api/books
Content-Type: application/json

{
  "title": "Тіні забутих предків",
  "author": "Михайло Коцюбинський",
  "description": "Класика української літератури",
  "year": 1911,
  "genre": "Роман",
  "isbn": "978-966-03-0000-0",
  "emoji": "📖",
  "available": true
}
```

Очікувано: `201` і створення книги.

### Перевірка санітизації

```http
POST /api/books
Content-Type: application/json

{
  "title": "<script>alert('xss')</script>Кобзар",
  "author": "Тарас Шевченко",
  "year": 1840,
  "genre": "Історія"
}
```

HTML-теги будуть видалені перед збереженням у базу.

## GitHub

```bash
git checkout -b LR10
git add .
git commit -m "feat: add zod validation, sanitization, security headers for library"
git push -u origin LR10
```

Не додавайте `.env.local` у GitHub.
