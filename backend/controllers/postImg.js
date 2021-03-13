import PostImg from "../models/postImg.js";

export default class postCtrl {
  createImg = (req, res, next) => {
    const postImg = new PostImg({
      ...req.body
    });
    postImg
      .save()
      .then(() => res.status(201).json({ message: "Post saved successfully!" }))
      .catch((error) => res.status(400).json(error));
  };

  getOneImg = (req, res, next) => {
    PostImg.findOne({
      _id: req.params.id,
    })
      .then((postImg) => res.status(200).json(postImg))
      .catch((error) => res.status(404).json(error));
  };

  modifyImg = (req, res, next) => {
    const postImg = new PostImg({
      ...req.body
    });
    PostImg.updateOne({ _id: req.params.id }, postImg)
      .then(() =>
        res.status(201).json({ message: "Thing updated successfully!" })
      )
      .catch((error) => res.status(400).json(error));
  };

  deleteImg = (req, res, next) => {
    PostImg.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Deleted!" }))
      .catch((error) => res.status(400).json(error));
  };

  getAllImg = (req, res, next) => {
    PostImg.find()
      .then((postImg) => res.status(200).json(postImg))
      .catch((error) => res.status(400).json(error));
  };
}
