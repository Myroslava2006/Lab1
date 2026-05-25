LR12 — Бібліотека: React Hook Form + Zod + Sonner

1) Розпакуй ZIP.
2) Скопіюй папки components, lib, app у свій Next.js проєкт.
3) Встанови пакети:
   npm install react-hook-form @hookform/resolvers sonner

4) У app/layout.js або app/layout.tsx додай:
   import { Toaster } from "sonner";

   І перед закриттям </body>:
   <Toaster richColors position="top-right" />

5) Запусти:
   npm run dev

6) Для GitHub:
   git checkout -b LR12
   git add .
   git commit -m "feat: add RHF Zod Sonner forms for library"
   git push -u origin LR12
