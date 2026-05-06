import Link from 'next/link'
export default function NotFound(){return <div className="container section" style={{textAlign:'center'}}><h1>404</h1><h2>Користувача не знайдено</h2><Link className="btn" href="/demo/users/1">До користувача #1</Link></div>}
