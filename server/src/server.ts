import express from "express";
import cors from "cors";
import { connectDB } from "./config/db";
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/test", () => {
  console.log("Server is running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
