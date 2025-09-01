import { Router } from "express";
import { UserController } from "../controllers/User.controller";
import { authMiddleware } from "../middlewares/user.auth.middleware";
import { upload } from "../middlewares/multer.middleware";

const userRouter = Router();
const user = new UserController();

userRouter.route("/createAccount").post(user.createUser);
userRouter.route("/login").post(user.loginUser);

userRouter.route("/validate").get(authMiddleware, user.validateSession);
userRouter
  .route("/addImage")
  .post(authMiddleware, upload.single("profileImage"), user.addImage);
userRouter.route("/updateBio").put(authMiddleware, user.updateBio);

export { userRouter };
