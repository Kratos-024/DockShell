import { Router } from "express";
import { LevelController } from "../controllers/levels.controller";
import { authMiddleware } from "../middlewares/user.auth.middleware";

const ctfLevelRouter = Router();
const ctfLevel = new LevelController();
ctfLevelRouter.route("/createLevel").post(ctfLevel.createLevel);
ctfLevelRouter.route("/createCtf").post(ctfLevel.createOrUpdateCtf);
ctfLevelRouter.route("/getCtf").get(ctfLevel.getCtf);
ctfLevelRouter.route("/getctfLevel/:uniqueId").get(ctfLevel.getLevel);
ctfLevelRouter.route("/updateLevel/:uniqueId").post(ctfLevel.updateLevel);

ctfLevelRouter.use(authMiddleware);
ctfLevelRouter.route("/getAllctfLevel").post(ctfLevel.getAllLevels);
ctfLevelRouter.route("/deleteCtfLevel/:uniqueId").post(ctfLevel.deleteLevel);
ctfLevelRouter.route("/saveLevelProgress").post(ctfLevel.saveLevelFlag);
ctfLevelRouter.route("/getAllUserProgress").get(ctfLevel.getAllUserProgress);

export { ctfLevelRouter };
