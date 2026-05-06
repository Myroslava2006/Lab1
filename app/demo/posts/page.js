export const metadata = { title: 'Пости API' }
export default async function PostsPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()
  return <div className="page"><h1>Пости з JSONPlaceholder</h1><div className="cards-grid">{posts.slice(0, 9).map(post => <article key={post.id} className="card"><h2>{post.title}</h2><p>{post.body}</p><small>Post #{post.id} by User {post.userId}</small></article>)}</div></div>
}
