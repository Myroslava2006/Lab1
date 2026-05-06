import { PostSkeleton } from '@/components/skeletons/PostSkeleton'
export default function Loading() {
  return <div className="page"><div className="sk sk-heading"></div><div className="cards-grid">{[...Array(9)].map((_, i) => <PostSkeleton key={i} />)}</div></div>
}
