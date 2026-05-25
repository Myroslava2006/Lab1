export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Система управління бібліотекою
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Зручний облік книг, читачів та видачі літератури в одному застосунку.
          </p>
          <a
            href="/about"
            className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-100 transition"
          >
            Дізнатися більше
          </a>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Можливості системи
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Каталог книг
              </h3>
              <p className="text-gray-600">
                Перегляд, пошук та облік усіх книг бібліотеки.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Облік читачів
              </h3>
              <p className="text-gray-600">
                Збереження інформації про читачів та їхні замовлення.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Видача та повернення
              </h3>
              <p className="text-gray-600">
                Контроль виданих книг, термінів повернення та доступності.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Мирослава | Курс "Основи обробки та передачі інформації"
          </p>
        </div>
      </footer>
    </div>
  );
}
