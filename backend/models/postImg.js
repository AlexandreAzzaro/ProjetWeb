import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  username: { type: String, required: true },
  caption: { type: String, required: true },
  diffusion: { type: [String] },
  likes: { type: Number },
  dislikes: { type: Number },
  title: { type: String },
  imageUrl: { type: String },
  creation_date: {type : Date},
  tags: { type: [String], required: true },
});

export default mongoose.model("PostImg", postSchema);
