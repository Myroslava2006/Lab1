import DashboardNav from '@/components/DashboardNav'

export default function DashboardLayout({ children }) {
  return (
    <main className="container px-4 py-8">
      <DashboardNav />
      {children}
    </main>
  )
}
