import type { Context } from "hono";
import * as todoModel from "../models/todo.model.ts";
import * as userModel from "../models/user.model.ts";

type createTodoBody = {
  title: string;
  userId: number;
};
type updateTitle = {
  id: number;
  title: string;
};

const createTodo = async (c: Context) => {
  try {
    const body = await c.req.json<createTodoBody>();
    if (!body.title || !body.userId)
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    const newTodo = await todoModel.createTodo(body.title, body.userId);
    return c.json({
      success: true,
      data: newTodo,
      msg: "Created new Todo!",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};
const getTodo = async (c: Context) => {
  try {
    const param = c.req.query("id");
    if (param !== undefined && param !== null) {
      const data = await todoModel.getTodo(parseInt(param));
      return c.json(data, 200);
    }
    return c.json(
      {
        success: false,
        data: null,
        msg: "Missing required fields",
      },
      400
    );
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};
const updateTodo = async (c: Context) => {
  try {
    const param = c.req.query("id");
    if (param !== undefined && param !== null) {
      const data = await todoModel.updateTodo(parseInt(param));
      return c.json(data, 200);
    }
    return c.json(
      {
        success: false,
        data: null,
        msg: "Missing required fields",
      },
      400
    );
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};
const updateTitle1 = async (c: Context) => {
  try {
    const body = await c.req.json<updateTitle>();
    if (!body.title || !body.id)
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    const newTodo = await todoModel.updateTitle(body.id, body.title);
    return c.json({
      success: true,
      data: newTodo,
      msg: "update todo title!",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};
const getAllTodo = async (c: Context) => {
  try {
    const param = c.req.query("id");
    if (!param)
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );

    if (isNaN(parseInt(param))) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "Invalid id parameter",
        },
        400
      );
    }

    const id = Number(param);
    if (!(await userModel.getUserById(id))) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "User not found",
        },
        404
      );
    }

    const todos = await todoModel.getAllTodoUser(id);

    return c.json({
      success: true,
      data: todos,
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

export { createTodo, getTodo, updateTodo, updateTitle1 ,getAllTodo };
