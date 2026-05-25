# Бібліотека

Онлайн-система бібліотеки для керування книгами, читачами та видачами.  
Проєкт реалізовано на Next.js з авторизацією, ролями, CRUD, формами та production-ready налаштуваннями.

> **Демо:** _додати посилання на Vercel-деплой після першого деплойменту_

## Скріншоти

_Додайте 3–5 скріншотів основних сторінок: головна, дашборд, форма створення книги, форма видачі, деталі._

## Можливості

- 🔐 Аутентифікація — реєстрація, логін, logout
- 👥 RBAC — ролі `admin` і `user`
- 📚 CRUD книг
- 🧾 Видача книг через зв’язки `Borrow` + `BorrowItem`
- 🎨 Форми — React Hook Form + Zod + Sonner
- 🛡 Безпека — серверна валідація, санітизація, security headers
- 🚀 Production-ready — `next/image`, SEO metadata, `robots.txt`, `sitemap.xml`
- ☁️ Деплой — Vercel + GitHub

## Технологічний стек

- **Frontend:** Next.js App Router, React, Tailwind CSS
- **Backend:** Next.js API Routes, NextAuth.js, bcrypt
- **База даних:** MongoDB Atlas + Mongoose
- **Форми:** React Hook Form + Zod
- **Toast:** Sonner
- **Деплой:** Vercel

## Локальний запуск

```bash
git clone https://github.com/Myroslava2006/Lab1.git
cd Lab1
npm install
cp .env.local.example .env.local
npm run dev
```

Після цього відкрийте:

```txt
http://localhost:3000
```

## Змінні середовища

| Змінна | Опис |
|--------|------|
| `MONGODB_URI` | Connection string з MongoDB Atlas |
| `NEXTAUTH_SECRET` | Секрет для NextAuth |
| `NEXTAUTH_URL` | URL застосунку |
| `NEXT_PUBLIC_SITE_URL` | URL для metadata, sitemap, robots |

## Деплой на Vercel

1. Push код на GitHub
2. Відкрити Vercel → Add New Project
3. Import GitHub repository
4. Додати Environment Variables
5. Deploy
6. Після деплою оновити:
   - `NEXTAUTH_URL`
   - `NEXT_PUBLIC_SITE_URL`
7. Redeploy

## Production checklist

- [x] Hero використовує `next/image`
- [x] OpenGraph і Twitter metadata
- [x] `robots.txt`
- [x] `sitemap.xml`
- [x] `.env.local.example`
- [x] README
- [ ] Додати реальний Vercel demo link
- [ ] Додати скріншоти
