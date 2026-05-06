export const metadata = { title: "Про бібліотеку" };

export default function AboutPage() {
  return (
    <div>
      <section className="hero small"><div className="container"><h1>Про бібліотеку</h1><p>Система для зручної роботи з книгами та бронюваннями.</p></div></section>
      <section className="section"><div className="container details">
        <p>Цей проект призначений для автоматизації роботи бібліотеки. Система допомагає вести облік книг, читачів, видачі та повернення літератури.</p>
        <p>Адміністратор може керувати каталогом книг, а користувачі можуть переглядати доступні книги та створювати бронювання.</p>
        <p>Проект створений за допомогою Next.js та React.</p>
      </div></section>
    </div>
  );
}
