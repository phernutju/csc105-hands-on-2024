import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";

type createUserBody = {
  firstName: string;
  lastName: string;
};
type editUser = {
  id: number;
  firstName: string;
  lastName: string;
}
const createUser = async (c: Context) => {
  try {
    const body = await c.req.json<createUserBody>();
    if (!body.firstName || !body.lastName)
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    if (await userModel.isDuplicate(body.firstName, body.lastName)) {
      return c.json({
        success: false,
        data: null,
        msg: "firstName or lastName is duplicated",
      });
    }
    const newUser = await userModel.createUser(body.firstName, body.lastName);
    return c.json({
      success: true,
      data: newUser,
      msg: "Created new User!",
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

const getAllUser = async (c: Context) => {
  try {
    const newAllUser = await userModel.getAllUser();
    return c.json({
      success: true,
      data: newAllUser,
      msg: "Users!",
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

const editUser = async (c: Context) => {
  try {
    const body = await c.req.json<editUser>();
    if (!body.id || !body.firstName || !body.lastName) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    }

    const userId = Number(body.id);
    if (isNaN(userId)) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "Invalid id parameter",
        },
        400
      );
    }

    const userExists = await userModel.getUserById(userId);
    if (!userExists) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "User not found",
        },
        404
      );
    }
    const updateUser = await userModel.updateUser(userId, body.firstName, body.lastName);
    
    return c.json({
      data:updateUser,
      success: true,
      msg: "User data updated successfully",
    });
  } catch (error) {
    console.error("editUser error:", error);
    return c.json(
      {
        success: false,
        data: null,
        msg: "Internal server error",
      },
      500
    );
  }
};
export { createUser, getAllUser, editUser };
