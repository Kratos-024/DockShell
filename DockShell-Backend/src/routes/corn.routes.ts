import { Router } from "express";

const cornRouter = Router();

cornRouter.route("/").get((req, res) => {
  res.status(200).json({ message: "Corn router hit!" });
});

export { cornRouter };
