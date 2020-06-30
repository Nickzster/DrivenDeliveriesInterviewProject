import express, { response } from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import { router as SampleRoutes } from "./routes/Example";
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/test", (req, res) => {
  console.log("Server is running!");
  res.send("Server is running!");
});

app.use("/", SampleRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
