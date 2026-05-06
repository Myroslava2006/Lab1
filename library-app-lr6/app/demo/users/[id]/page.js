import { notFound } from 'next/navigation'
const users={'1':{id:1,name:'John Doe'},'2':{id:2,name:'Jane Smith'},'3':{id:3,name:'Bob Johnson'}}
export default async function UserPage({params}){const {id}=await params;const user=users[id];if(!user)notFound();return <div className="container section"><h1>Користувач: {user.name}</h1><p>ID: {user.id}</p></div>}
