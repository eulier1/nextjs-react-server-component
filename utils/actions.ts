'use server';
import { revalidatePath } from 'next/cache';
import db from './db';

export const completeTodo = async (id) => {
  await db.todo.update({
    where: {
      id,
    },
    data: {
      completed: true,
    },
  });

  revalidatePath('/todos');
};

export const newTodo = async (formData: FormData) => {
  const content = formData.get('content')?.toString() ?? '';

  const todo = await db.todo.create({
    data: {
      content,
    },
  });

  revalidatePath('/todos');
};
