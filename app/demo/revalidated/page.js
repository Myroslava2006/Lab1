export const revalidate = 10
export const metadata = { title: 'Revalidation' }
export default async function RevalidatedPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/2')
  const post = await response.json()
  return <div className="page"><h1>Revalidated пост</h1><div className="info green"><b>Production:</b> оновлення кожні 10 секунд. <br/><b>Dev:</b> час оновлюється при кожному запиті.</div><article className="card"><h2>{post.title}</h2><p>{post.body}</p><small>Завантажено: {new Date().toLocaleTimeString()}</small></article></div>
}
