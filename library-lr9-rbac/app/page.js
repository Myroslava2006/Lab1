import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="container px-4 py-12">
      <section className="bg-white rounded-xl shadow p-8">
        <h1 className="text-4xl font-bold mb-4">Онлайн-бібліотека</h1>
        <p className="text-gray-700 mb-6">
          Вітаємо у системі бібліотеки. Зареєструйтесь як читач або увійдіть у свій акаунт.
        </p>
        <div className="flex gap-4">
          <Link href="/auth/register" className="bg-blue-800 text-white px-5 py-2 rounded hover:bg-blue-900">
            Реєстрація читача
          </Link>
          <Link href="/auth/login" className="border border-blue-800 text-blue-800 px-5 py-2 rounded hover:bg-blue-50">
            Увійти
          </Link>
        </div>
      </section>
    </main>
  )
}
