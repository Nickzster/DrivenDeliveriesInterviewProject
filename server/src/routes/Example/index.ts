import express from "express";
import { createSample, getMultipleSamples } from "../../controllers/Sample";

const router: express.Router = express.Router();

router.post(
  "/messages/add",
  [],
  async (req: express.Request, res: express.Response) => {
    let data = await createSample(req.body.id, req.body.message);
    if (data.success) return res.json(data.data);
    return res.json(data.error);
  }
);

router.get(
  "/messages",
  [],
  async (req: express.Request, res: express.Response) => {
    return res.send(await getMultipleSamples({ page: req.body.page }, 100));
  }
);

export { router };
