import { Hono } from "hono";
import * as todoControl from "../controller/todo.controller.ts"

const todoRouter = new Hono();

todoRouter.get("/test", (c) => c.text("Hello From Todo Router"));
todoRouter.get("/get",todoControl.GetTodo);
todoRouter.post("/create", todoControl.AddTodo);
todoRouter.patch("/updateTitle", todoControl.EditTodoName);
todoRouter.delete("/delete", todoControl.DeleteTodo);
todoRouter.patch("/success", todoControl.CompleteTodo);

export { todoRouter };
