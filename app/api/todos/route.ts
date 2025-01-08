import { NextResponse } from 'next/server';
import db from '@/utils/db';

export const GET = async (request: Request) => {
  return NextResponse.json({ messages: 'Hello' });
};

export const POST = async (request: Request) => {
  const data = await request.json();
  const todo = await db.todo.create({ data });

  return NextResponse.json({ message: todo });
};
