import { Suspense } from 'react'
import { PostSkeleton, StatSkeleton } from '@/components/skeletons/PostSkeleton'

async function FastStats() {
  await new Promise(resolve => setTimeout(resolve, 500))
  return <div className="stats-grid"><div className="stat-card"><h3>Книг</h3><p>128</p></div><div className="stat-card"><h3>Читачів</h3><p>456</p></div><div className="stat-card"><h3>Бронювань</h3><p>37</p></div></div>
}
async function SlowPosts() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
  const posts = await response.json()
  return <div className="stack"><h2>Повільні пости (3 сек)</h2>{posts.map(post => <article key={post.id} className="card"><h3>{post.title}</h3><p>{post.body}</p></article>)}</div>
}
export default function StreamingPage() {
  return <div className="page"><h1>Streaming Demo</h1><div className="info blue">Швидка статистика з'явиться через 0.5 сек, повільні пости — через 3 сек.</div><Suspense fallback={<div className="stats-grid"><StatSkeleton/><StatSkeleton/><StatSkeleton/></div>}><FastStats/></Suspense><Suspense fallback={<div className="stack"><div className="sk sk-heading"></div><PostSkeleton/><PostSkeleton/><PostSkeleton/></div>}><SlowPosts/></Suspense></div>
}
