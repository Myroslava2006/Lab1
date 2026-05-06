import BookFilter from "@/components/BookFilter";

export default function CatalogPage() {
  return (
    <div>
      <section className="page-title">
        <div className="container">
          <h1>Каталог книг</h1>
          <p>Знайдіть потрібну книгу за назвою, описом або жанром.</p>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <BookFilter />
        </div>
      </section>
    </div>
  );
}
