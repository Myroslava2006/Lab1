export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <a href="/" className="text-emerald-700 hover:underline">
          ← На головну
        </a>

        <div className="bg-white rounded-lg shadow-md p-8 mt-6">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">
            Про бібліотеку
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Цей проект призначений для автоматизації роботи бібліотеки. Система
            допомагає вести облік книг, читачів, видачі та повернення літератури.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Користувачі можуть швидко знаходити потрібні книги, а бібліотекарі —
            контролювати наявність літератури та терміни її повернення.
          </p>
          <p className="text-lg text-gray-700">
            Застосунок створений за допомогою Next.js та Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
}
