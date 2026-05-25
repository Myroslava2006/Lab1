// LR1 — Сторінка /about для проєкту "Бібліотека"

import Link from "next/link";

export const metadata = {
  title: "Про бібліотеку",
  description: "Інформація про систему управління бібліотекою",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/"
          className="text-emerald-700 hover:underline mb-6 inline-block"
        >
          ← На головну
        </Link>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-5xl mb-4">📚</div>

          <h1 className="text-4xl font-bold mb-6 text-gray-900">
            Про бібліотеку
          </h1>

          <p className="text-lg text-gray-700 mb-4">
            Система управління бібліотекою — це навчальний вебпроєкт,
            створений для автоматизації роботи з книгами та читачами.
            Він допомагає зручно зберігати інформацію про книжковий фонд,
            контролювати наявність книг і організовувати процес видачі.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            Основна мета проєкту — зробити роботу бібліотеки швидшою,
            зрозумілішою та сучаснішою. Така система може бути корисною
            для навчальних закладів, міських бібліотек або невеликих приватних
            книжкових клубів.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Проєкт створено за допомогою Next.js, React та Tailwind CSS.
            У наступних лабораторних роботах система буде розширюватися:
            зʼявляться сторінки каталогу, авторизація, база даних,
            CRUD-операції та деплой на Vercel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <h2 className="font-bold text-emerald-900 mb-2">
                🎯 Мета
              </h2>
              <p className="text-gray-700">
                Створити зручний сервіс для обліку книг та читачів.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <h2 className="font-bold text-emerald-900 mb-2">
                💻 Технології
              </h2>
              <p className="text-gray-700">
                Next.js, React, Tailwind CSS, GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
