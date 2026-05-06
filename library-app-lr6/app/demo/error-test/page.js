export const dynamic='force-dynamic'
export default async function ErrorTestPage(){if(Math.random()>0.5) throw new Error('Випадкова помилка для тестування error.js');return <div className="container section"><div className="success"><h1>Успіх! Помилки не сталося</h1><p>Оновіть сторінку — є 50% шанс помилки.</p></div></div>}
