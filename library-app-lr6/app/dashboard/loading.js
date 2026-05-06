import { StatSkeleton } from '@/components/skeletons/PostSkeleton'
export default function Loading(){return <div><div className="skeleton" style={{height:40,width:150,marginBottom:20}}></div><div className="stats"><StatSkeleton/><StatSkeleton/><StatSkeleton/></div></div>}
