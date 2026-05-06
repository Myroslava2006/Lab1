export const metadata = { title: 'Без кешу' }
export default async function NoCachePage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/3', { cache: 'no-store' })
  const post = await response.json()
  return <div className="page"><h1>Пост без кешу</h1><div className="info red"><b>Production:</b> кожне оновлення — новий запит до API.</div><article className="card"><h2>{post.title}</h2><p>{post.body}</p><small>Завантажено: {new Date().toLocaleTimeString()}</small></article></div>
}
