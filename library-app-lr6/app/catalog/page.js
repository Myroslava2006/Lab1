import BookFilter from '@/components/BookFilter'
export const metadata = { title: 'Каталог книг' }
export default function CatalogPage(){return <div><section className="hero"><h1>Каталог книг</h1><p>Знайдіть потрібну книгу за назвою, автором або жанром.</p></section><section className="section"><div className="container"><BookFilter/></div></section></div>}
