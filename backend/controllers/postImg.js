import PostImg from "../models/postImg.js";

export default class postCtrl {
  createThing = (req, res, next) => {
    const postImg = new PostImg({
      ...req.body
    });
    postImg
      .save()
      .then(() => res.status(201).json({ message: "Post saved successfully!" }))
      .catch((error) => res.status(400).json(error));
  };

  getOneThing = (req, res, next) => {
    PostImg.findOne({
      _id: req.params.id,
    })
      .then((postImg) => res.status(200).json(postImg))
      .catch((error) => res.status(404).json(error));
  };

  modifyThing = (req, res, next) => {
    const postImg = new PostImg({
      ...req.body
    });
    PostImg.updateOne({ _id: req.params.id }, postImg)
      .then(() =>
        res.status(201).json({ message: "Thing updated successfully!" })
      )
      .catch((error) => res.status(400).json(error));
  };

  deleteThing = (req, res, next) => {
    PostImg.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Deleted!" }))
      .catch((error) => res.status(400).json(error));
  };

  getAllStuff = (req, res, next) => {
    PostImg.find()
      .then((postImg) => res.status(200).json(postImg))
      .catch((error) => res.status(400).json(error));
  };
}
