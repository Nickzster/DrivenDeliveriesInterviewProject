import { Document } from "mongoose";

export interface ISample extends Document {
  message: string;
  id: string;
}
