import { NextResponse } from 'next/server'
import { books, addBook, validateBookData } from '@/lib/books'

export async function GET(request){
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const search = searchParams.get('search')
  let result = [...books]
  if(category && category !== 'Всі') result = result.filter(book => book.category === category)
  if(search){ const q = search.toLowerCase(); result = result.filter(book => book.title.toLowerCase().includes(q) || book.author.toLowerCase().includes(q)) }
  return NextResponse.json(result)
}

export async function POST(request){
  try{
    const body = await request.json()
    const validationError = validateBookData(body)
    if(validationError) return NextResponse.json({error:validationError},{status:400})
    const newBook = addBook(body)
    return NextResponse.json(newBook,{status:201})
  }catch(error){ return NextResponse.json({error:'Невалідний JSON'},{status:400}) }
}
