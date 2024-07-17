import { Request } from "express";

export interface SingInUserRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}
