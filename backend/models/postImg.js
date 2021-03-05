import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  user_id: { type: String, required: true },
  caption: { type: String, required: true },
  diffusion: { type: [String] },
  likes: { type: Number },
  dislikes: { type: Number },
  comment: { type: [String] },
  imageUrl: { type: String, required: true },
  creation_date: {type : Date, required: true},
  tags: { type: [String], required: true },
});

export default mongoose.model("PostImg", postSchema);
