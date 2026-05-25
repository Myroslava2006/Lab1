LR1 — Створення першого Next.js проєкту на тему "Бібліотека"

Що всередині:
- app/page.js — головна Landing Page
- app/about/page.js — сторінка Про бібліотеку
- app/layout.js — metadata для теми бібліотеки
- git-commands.txt — команди для GitHub

Як використати:
1. Створи Next.js проєкт:
   npx create-next-app@latest library-app

2. Обери:
   TypeScript? No
   ESLint? Yes
   Tailwind CSS? Yes
   src directory? No
   App Router? Yes
   React Compiler? No
   Import alias? No

3. Зайди в проєкт:
   cd library-app

4. Скопіюй папку app з цього архіву в проєкт із заміною файлів.

5. Запусти:
   npm run dev

6. Відкрий:
   http://localhost:3000

7. Для GitHub:
   git checkout -b LR1
   git add .
   git commit -m "LR1: create library landing page and about"
   git push -u origin LR1
