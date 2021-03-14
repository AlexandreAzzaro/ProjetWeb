import PostImg from "../models/postImg.js";

export default class postCtrl {
  createImg = (req, res, next) => {
    console.log(req.body.username);
    //const imgObject = JSON.parse(req.body.postImg)
    const postImg = new PostImg({
      ...req.body,
      imageUrl: `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`,
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
      ...req.body,
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
      .sort("-creation_date")
      .then((postImg) => res.status(200).json(postImg))
      .catch((error) => res.status(400).json(error));
  };

  getAllImgByUser = (req, res, next) => {
    PostImg.find({
      username: req.params.username,
    })
      .sort("-creation_date")
      .then((postImg) => res.status(200).json(postImg))
      .catch((error) => res.status(400).json(error));
  };

  getAllImgByTag = (req, res, next) => {
    PostImg.find({
      tags: req.params.tags,
    })
      .sort("-creation_date")
      .then((postImg) => res.status(200).json(postImg))
      .catch((error) => res.status(400).json(error));
  };
}
