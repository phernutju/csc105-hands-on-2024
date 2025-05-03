import type { Context } from "hono";
import * as todoModel from "../model/todo.model.ts";
import * as todoType from "../types/todo.type.ts"

const GetTodo = async (c: Context) => {
  try {
    const todo = await todoModel.GetTodo();
    return c.json(todo, 200);
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const AddTodo = async (c: Context) => {
  try {
    const body = await c.req.json <todoType.createTodoBody>();
    const todo = await todoModel.AddTodo(body.name);
    return c.json({
      success : true,
      data : todo,
      msg : "Created new todo"
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const EditTodoName = async (c: Context) => {
  try {
    const body = await c.req.json <todoType.updateTodo>();
    const todo = await todoModel.EditTodo(body.id ,body.name);
    return c.json({
      success : true,
      data : todo,
      msg : "Edit Done!"
    })
    
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const CompleteTodo = async (c: Context) => {
  try {
    const body = await c.req.json<todoType.findId>();
    const todo = await todoModel.SuccessTodo(body.id);
    return c.json({
        success : true,
        data : todo,
        msg : "Completed!"
    })
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const DeleteTodo = async (c: Context) => {
  try {

    const body = await c.req.json <todoType.findId>();
    const todo = await todoModel.DeleteTodo(body.id);
    return c.json({
        success : true,
        data : todo,
        msg : "Delete Successfully"
    })
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

export { GetTodo, AddTodo, EditTodoName, CompleteTodo, DeleteTodo };
