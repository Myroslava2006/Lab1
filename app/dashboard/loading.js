import { StatSkeleton } from '@/components/skeletons/PostSkeleton'
export default function Loading() { return <div><div className="sk sk-heading"></div><div className="stats-grid"><StatSkeleton/><StatSkeleton/><StatSkeleton/></div><div className="stats-grid two"><StatSkeleton/><StatSkeleton/></div></div> }
