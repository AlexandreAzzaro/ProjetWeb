import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  username: { type: String, required: true },
  caption: { type: String, required: true },
  diffusion: { type: [String] },
  likes: { type: Number },
  dislikes: { type: Number },
  title: { type: String },
  imageUrl: { type: String, required: true },
  //creation_date: {type : Date, required: true},
  tags: { type: [String], required: true },
});

export default mongoose.model("PostImg", postSchema);
