# LR9 — Авторизація та ролі RBAC / Бібліотека

Готовий Next.js проєкт для практичної роботи тиждень 9.

## Реалізовано

- NextAuth.js login/register
- MongoDB + Mongoose
- Middleware для захисту `/dashboard/*`
- RBAC ролі `user` та `admin`
- Хелпер `authorize()`
- Захищені API для книг: POST, PUT, DELETE тільки для admin
- Сторінка `/dashboard/users` тільки для admin
- Зміна ролей користувачів
- Badge ролі в Header
- DashboardNav з пунктом «Користувачі» тільки для admin
- Seed endpoint `/api/seed`
- Тема адаптована під «Бібліотека»

## Запуск

```bash
npm install
npm run dev
```

Створи `.env.local` на основі `.env.example`:

```env
MONGODB_URI=mongodb+srv://...
NEXTAUTH_SECRET=mysecret123
NEXTAUTH_URL=http://localhost:3000
```

## Тестові акаунти

Спочатку відкрий у браузері:

```txt
http://localhost:3000/api/seed
```

Потім можна входити:

```txt
admin@test.com / password123
user@test.com / password123
```

## GitHub

```bash
git init
git add .
git commit -m "LR9: Авторизація та ролі RBAC"
git branch -M main
git remote add origin ТВОЄ_ПОСИЛАННЯ_НА_REPO
git push -u origin main --force
```
