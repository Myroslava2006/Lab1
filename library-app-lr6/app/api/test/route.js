import { NextResponse } from 'next/server'
export async function GET(){return NextResponse.json({message:'API працює! Система управління бібліотекою',timestamp:new Date().toISOString()})}
