// LR1 — Головна сторінка проєкту "Бібліотека"

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero секція */}
      <section className="bg-gradient-to-r from-emerald-700 to-green-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">📚</div>

          <h1 className="text-5xl font-bold mb-4">
            Система управління бібліотекою
          </h1>

          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Зручний онлайн-сервіс для обліку книг, читачів та видачі літератури.
            Швидкий пошук, просте керування та сучасний інтерфейс.
          </p>

          <Link
            href="/about"
            className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-100 transition inline-block"
          >
            Дізнатися більше
          </Link>
        </div>
      </section>

      {/* Секція можливостей */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Можливості системи
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Картка 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Каталог книг
              </h3>
              <p className="text-gray-600">
                Зберігайте інформацію про книги: назву, автора, жанр,
                рік видання та наявність у бібліотеці.
              </p>
            </div>

            {/* Картка 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Облік читачів
              </h3>
              <p className="text-gray-600">
                Ведіть список читачів, переглядайте їхні дані та історію
                користування бібліотекою.
              </p>
            </div>

            {/* Картка 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Видача книг
              </h3>
              <p className="text-gray-600">
                Контролюйте видачу та повернення книг, щоб завжди знати,
                які книги доступні.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Додаткова секція */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Для кого ця система?
          </h2>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Проєкт призначений для шкільних, університетських та міських
            бібліотек, які хочуть перейти від паперового обліку до зручної
            цифрової системи.
          </p>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Мирослава | Курс &quot;Основи обробки та передачі інформації&quot;
          </p>
        </div>
      </footer>
    </div>
  );
}
