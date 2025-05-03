import { db } from "../index.ts";

const GetTodo = async () => {
  const todo = await db.todo.findMany();
  return todo;
};

const AddTodo = async (newTodoName: string) => {
  const todo = await db.todo.create({
    data: {
      name: newTodoName,
      success: false,
    },
  })
  return todo;
};

const EditTodo = async (todoId: number, editTodoName: string) => {
  const existing = await db.todo.findUnique({
    where: {id: todoId},
  });
  if (!existing) {
    return null;
  }

  const updated = await db.todo.update({
    where: {id: todoId},
    data: {name: editTodoName},
  });
  return updated;
  };

const SuccessTodo = async (todoId: number) => {
  const existing = await db.todo.findUnique({
    where: {id: todoId},
  });
  if (!existing) {
    return null;
  }
  const updated = await db.todo.update({
    where: {id: todoId},
    data: {success: true },
  });
  return updated;
};

const DeleteTodo = async (todoId: number) => {
  const existing = await db.todo.findUnique({
    where: {id: todoId},
  });
  if (!existing) {
    return null;
  }
  const todo = await db.todo.delete({
    where: {id: todoId},
  })
  return todo;
};

export { GetTodo, AddTodo, EditTodo, SuccessTodo, DeleteTodo };
