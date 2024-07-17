/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
| Here is where you can register API routes for your application. Enjoy building your API!
|
*/
import { signIn } from "../controllers/user/user.controller";
import { Router, Request, Response } from "express";
import { ValidationError, body, validationResult } from "express-validator";
import httpStatus from "http-status";
const router = Router();

function validateReqSchema(req: Request, res: Response, next: Function) {
  const validationErrors = validationResult(req);
  if (validationErrors.isEmpty()) {
    return next();
  }
  const errors = validationErrors
    .array()
    .map((err: ValidationError) => ({ [err.type]: err.msg }));

  return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
    errors,
  });
}

router.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

router.get("/health", (req, res) => {
  res.status(httpStatus.OK).send("OK");
});

router.get(
  "/user/signin",
  [body("email").exists().isString(), body("password").exists().isString()],
  validateReqSchema,
  (req: Request, res: Response) => signIn(req, res)
);

export default router;
