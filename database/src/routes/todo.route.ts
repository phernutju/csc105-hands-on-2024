import { Hono } from "hono";
import * as todoController from "../controllers/todo.controller.ts";

const todoRouter = new Hono();
todoRouter.post("/create", todoController.createTodo);
todoRouter.get("/", todoController.getTodo);
todoRouter.patch("/update", todoController.updateTodo);
todoRouter.patch("/updateTitle", todoController.updateTitle1)
todoRouter.get("/all", todoController.getAllTodo)
export { todoRouter };