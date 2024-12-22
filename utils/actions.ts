'use server';
import { revalidatePath } from 'next/cache';
import db from './db';

export const newTodo = async (formData: any) => {
  const content = formData.get('content')?.toString() ?? '';

  const todo = await db.todo.create({
    data: {
      content,
    },
  });

  revalidatePath('/todos');
};
