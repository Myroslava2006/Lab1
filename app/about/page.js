import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <section className="page-title">
        <div className="container">
          <h1>Про бібліотеку</h1>
          <p>Інформація про проект та його можливості.</p>
        </div>
      </section>

      <section className="section">
        <div className="container text-page">
          <p>
            Цей проект призначений для автоматизації роботи бібліотеки. Система допомагає вести облік книг,
            читачів, видачі та повернення літератури.
          </p>
          <p>
            Адміністратор може керувати каталогом книг, а користувачі можуть переглядати доступну літературу
            та створювати бронювання.
          </p>
          <p>
            У практичній роботі використано React-компоненти, props, useState, пошук та фільтрацію за категоріями.
          </p>
          <Link href="/catalog" className="link-button">Відкрити каталог</Link>
        </div>
      </section>
    </div>
  );
}
