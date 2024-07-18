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

/**
 * @openapi
 * '/api/health':
 *  get:
 *     responses:
 *      200:
 *        description: OK
 *      500:
 *        description: Server Error
 */

router.get("/health", (req, res) => {
  res.status(httpStatus.OK).send("OK");
});

/**
 * @openapi
 * '/api/user/signin':
 *  post:
 *     tags:
 *     - User Controller
 *     summary: Login as a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                default: johndoe
 *              password:
 *                type: string
 *                default: johnDoe20!@
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.post(
  "/user/signin",
  [body("email").exists().isString(), body("password").exists().isString()],
  validateReqSchema,
  (req: Request, res: Response) => signIn(req, res)
);

export default router;
