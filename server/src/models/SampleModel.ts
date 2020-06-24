import mongoose, { Schema } from "mongoose";
import { ISample } from "../lib/interfaces/models";
const SampleSchema: Schema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export default mongoose.model<ISample>("Samples", SampleSchema);
