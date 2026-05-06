export const metadata = { title: 'Повільна сторінка' }
export default async function SlowPage() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()
  return <div className="page"><h1>Повільна сторінка (3 сек)</h1><div className="info yellow">Ця сторінка спеціально завантажується 3 секунди.</div><div className="cards-grid">{posts.slice(0, 6).map(post => <article key={post.id} className="card"><h2>{post.title}</h2><p>{post.body}</p></article>)}</div></div>
}
