import { PostSkeleton } from '@/components/skeletons/PostSkeleton'
export default function Loading(){return <div className="container section"><div className="grid">{[...Array(9)].map((_,i)=><PostSkeleton key={i}/>)}</div></div>}
