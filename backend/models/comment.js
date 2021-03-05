import mongoose from "mongoose";

const comSchema = mongoose.Schema({
  user_id: { type: String, required: true },
  comment: { type: [String] },
  creation_date: {type : Date, required: true},
  tags: { type: [String] },
});

export default mongoose.model("post", comSchema);