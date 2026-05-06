export const metadata = { title: "Контакти", description: "Зв'яжіться з бібліотекою" };

export default function ContactPage() {
  return (
    <div>
      <section className="hero small"><div className="container"><h1>Контакти</h1><p>Ми завжди раді допомогти читачам.</p></div></section>
      <section className="section"><div className="container two-col">
        <div className="contact-box"><h2>Наші контакти</h2>
          <p>📍 <b>Адреса:</b> м. Київ, вул. Книжкова, 10</p>
          <p>📞 <b>Телефон:</b> +380 44 123-45-67</p>
          <p>🕒 <b>Графік:</b> Пн-Пт 9:00–18:00, Сб 10:00–15:00</p>
        </div>
        <div className="contact-box"><h2>Напишіть нам</h2><p>Форма зворотного зв'язку буде додана пізніше.</p></div>
      </div></section>
    </div>
  );
}
