export const dynamic = 'force-dynamic'
export const metadata = { title: 'Тест помилки' }
export default async function ErrorTestPage() {
  const shouldFail = Math.random() > 0.5
  if (shouldFail) throw new Error('Випадкова помилка для тестування error.js')
  return <div className="page"><div className="info green"><h1>Успіх! Помилки не сталося</h1><p>Оновіть сторінку — є 50% шанс помилки.</p></div></div>
}
