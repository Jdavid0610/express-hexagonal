import { SingInUserRequest } from "@/requests/user/SingInUserRequest";
import { Response } from "express";
import httpStatus from "http-status";

export const signIn = async (req: SingInUserRequest, res: Response) => {
  try {
    const { email, password } = req.body;

    res.status(httpStatus.OK).send({
      token: "token-example",
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
  }
};
