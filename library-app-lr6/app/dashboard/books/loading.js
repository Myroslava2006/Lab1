import { TableSkeleton } from '@/components/skeletons/PostSkeleton'
export default function Loading(){return <div><div className="skeleton" style={{height:40,width:180,marginBottom:20}}></div><TableSkeleton rows={8}/></div>}
