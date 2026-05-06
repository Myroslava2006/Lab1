import { NextResponse } from 'next/server'
import { getBookById, updateBook, deleteBook, validateBookData } from '@/lib/books'

export async function GET(request,{params}){
  const { id } = await params
  const book = getBookById(id)
  if(!book) return NextResponse.json({error:'Книгу не знайдено'},{status:404})
  return NextResponse.json(book)
}

export async function PUT(request,{params}){
  const { id } = await params
  try{
    const body = await request.json()
    const validationError = validateBookData(body)
    if(validationError) return NextResponse.json({error:validationError},{status:400})
    const updated = updateBook(id, body)
    if(!updated) return NextResponse.json({error:'Книгу не знайдено'},{status:404})
    return NextResponse.json(updated)
  }catch(error){ return NextResponse.json({error:'Невалідний JSON'},{status:400}) }
}

export async function DELETE(request,{params}){
  const { id } = await params
  const deleted = deleteBook(id)
  if(!deleted) return NextResponse.json({error:'Книгу не знайдено'},{status:404})
  return NextResponse.json({message:`Книгу "${deleted.title}" видалено`, deleted})
}
