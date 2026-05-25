import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/lib/auth'

export const metadata = { title: 'Профіль | Бібліотека' }

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)

  return (
    <div className="bg-white border rounded-lg shadow p-6 max-w-xl">
      <h1 className="text-3xl font-bold mb-6">Профіль читача</h1>
      <p><b>Ім’я:</b> {session?.user?.name}</p>
      <p><b>Email:</b> {session?.user?.email}</p>
      <p><b>Роль:</b> {session?.user?.role}</p>
      <p><b>ID:</b> {session?.user?.id}</p>
    </div>
  )
}
