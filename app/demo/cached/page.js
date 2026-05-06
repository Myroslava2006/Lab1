export const metadata = { title: 'Кешування' }
export default async function CachedPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const post = await response.json()
  return <div className="page"><h1>Закешований пост</h1><div className="info blue"><b>Production:</b> сторінка кешується після build. <br/><b>Dev:</b> час оновлюється при кожному запиті.</div><article className="card"><h2>{post.title}</h2><p>{post.body}</p><small>Завантажено: {new Date().toLocaleTimeString()}</small></article></div>
}
