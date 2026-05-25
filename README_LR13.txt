LR13 — Бібліотека: Vercel Deployment + Production-ready

Що всередині:
- app/page.jsx — головна сторінка з next/image hero
- app/layout.jsx — metadata + OpenGraph + Twitter Cards + Toaster
- app/robots.js — robots.txt
- app/sitemap.js — sitemap.xml з динамічними URL книг
- public/og-image.svg — OG-картинка 1200x630
- README.md — готовий README для GitHub
- .env.local.example — шаблон змінних
- next.config.mjs — remotePatterns для Unsplash + security headers
- package-install.txt — команди
- git-commands.txt — команди для GitHub

Як вставити:
1. Розпакуй ZIP.
2. Скопіюй app, public, README.md, .env.local.example, next.config.mjs у корінь свого Next.js проєкту.
3. Якщо якісь файли вже є — замінюй або перенось код уважно.
4. Встанови/перевір пакети:
   npm install
5. Перевір білд:
   npm run build
6. Запусти:
   npm run dev

Для Vercel:
- NEXTAUTH_URL = твій Vercel URL
- NEXT_PUBLIC_SITE_URL = твій Vercel URL
- MONGODB_URI = MongoDB Atlas URI
- NEXTAUTH_SECRET = секрет

GitHub:
git checkout -b LR13
git add .
git commit -m "Week 13: production-ready library deployment"
git push -u origin LR13
