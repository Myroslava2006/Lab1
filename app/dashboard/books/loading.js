import { TableSkeleton } from '@/components/skeletons/PostSkeleton'
export default function Loading() { return <div><div className="row mb"><div className="sk sk-heading"></div><div className="sk sk-button"></div></div><TableSkeleton rows={8}/></div> }
