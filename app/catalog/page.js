import BookFilter from "@/components/BookFilter";

export const metadata = { title: "Каталог книг" };

export default function CatalogPage() {
  return (
    <div>
      <section className="hero small"><div className="container"><h1>Каталог книг</h1><p>Знайдіть потрібну книгу за назвою, автором, описом або жанром.</p></div></section>
      <section className="section"><div className="container"><BookFilter /></div></section>
    </div>
  );
}
