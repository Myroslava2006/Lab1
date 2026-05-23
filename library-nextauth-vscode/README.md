# LR8 — Автентифікація з NextAuth.js
## Тема: Онлайн-бібліотека

Цей архів містить готові файли для VS Code на тему **«Бібліотека»**.

## 1. Встановити залежності

```bash
npm install next-auth bcryptjs
```

## 2. Додати `.env.local`

```env
MONGODB_URI=ваш_mongodb_uri
NEXTAUTH_SECRET=ваш_секретний_ключ
NEXTAUTH_URL=http://localhost:3000
```

Секрет можна згенерувати так:

```bash
openssl rand -base64 32
```

## 3. Куди копіювати файли

Скопіюйте папки з цього архіву у свій Next.js проєкт:

- `lib/`
- `components/`
- `app/`

Якщо у вас уже є `layout.js` або `Header.jsx`, обережно перенесіть потрібні частини коду, щоб не втратити власний дизайн.

## 4. Запуск

```bash
npm run dev
```

## 5. Сторінки

- Реєстрація: `http://localhost:3000/auth/register`
- Вхід: `http://localhost:3000/auth/login`
- Кабінет читача: `http://localhost:3000/dashboard`

## 6. GitHub

```bash
git checkout -b LR8
git add .
git commit -m "LR8: Authentication with NextAuth.js for library project"
git push -u origin LR8
```

Перед комітом перевірте, що `.env.local` не потрапив у Git.
