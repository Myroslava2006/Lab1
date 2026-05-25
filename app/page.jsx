import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Головна",
  description:
    "Онлайн-бібліотека для пошуку книг, видачі літератури та керування читачами.",
};

export default function HomePage() {
  return (
    <main>
      <section className="relative h-[480px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1600&q=80"
          alt="Бібліотека з книжковими полицями"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/85 to-emerald-700/65" />

        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            Онлайн-бібліотека
          </h1>

          <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-50">
            Зручна система для керування книгами, читачами та видачами у бібліотеці.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/dashboard/books"
              className="bg-white text-emerald-800 px-6 py-3 rounded font-bold hover:bg-emerald-50"
            >
              Переглянути книги
            </Link>

            <Link
              href="/login"
              className="bg-emerald-700 text-white px-6 py-3 rounded font-bold hover:bg-emerald-800"
            >
              Увійти
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Можливості системи
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Каталог книг"
            text="Додавайте, редагуйте та переглядайте книги бібліотеки."
          />

          <FeatureCard
            title="Видача книг"
            text="Створюйте видачі з кількома книгами та контролюйте статус."
          />

          <FeatureCard
            title="Ролі користувачів"
            text="Admin керує всією системою, user бачить власні записи."
          />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ title, text }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 border">
      <h3 className="font-bold text-xl mb-2 text-emerald-800">
        {title}
      </h3>
      <p className="text-gray-600">
        {text}
      </p>
    </div>
  );
}
