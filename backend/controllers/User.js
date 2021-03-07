import bcrypt from "bcrypt";
import userSchema from "../models/User.js";
//import jwt from "jsonwebtoken"

export default class userCtrl {
  signup = async (req, res, next) => {
    let hashpass = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashpass;
    const user = new userSchema({
      ...req.body,
    });
    return user
      .save()
      .then(() => {
        return res.status(201).json({ message: "utilisateur créé" });
      })
      .catch((error) => {
        console.log(error), res.status(500).json({ error });
      });
  };

  /* login = async (req, res, next) => {
    let user = await userSchema
      .findOne({ username: req.body.username })
      .then((user) => {
        if (!user) {
          return res.status(401).json({ error: "utilisateur inconnu" });
        }
        bcrypt
          .compare(req.body.password, user.password)
          .then((valid) => {
            if (!valid) {
              return res.status(401).json({ error: "mot de passe incorrect" });
            }
            res.status(200).json({
              userId: user._id,
              /*token: jwt.sign(
               {userId: user._id},
                'Random_Token_Secret',
                {expiresIn: '24h'}
                ),
            });
          })
          .catch((error) => res.status(500).json({ error }));
      })
      .catch((error) => res.status(500).json({ error }));
  };*/

  login = async (req, res, next) => {
    try {
      let user = await userSchema.findOne({ username: req.body.username });
      if (!user) {
        return res.status(401).json({ error: "utilisateur inconnu" });
      }
      try {
        await bcrypt.compare(req.body.password, user.password);
        if (!valid) {
          return res.status(401).json({ error: "mot de passe incorrect" });
        }
        res.status(200).json({ userId: user._id });
      } catch (error) {
        res.status(500).json(error);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };

  isUsernameExist = async (req, res, next) => {
    try {
      await userSchema.findOne({
        username: req.params.username,
      });
      return res.status(200).json(true);
    } catch (error) {
      res.status(404).json(false);
    }
  };

  isemailExist = async (req, res, next) => {
    try {
      await userSchema.findOne({
        email: req.params.email,
      });
      return res.status(200).json(true);
    } catch (error) {
      res.status(404).json(error);
    }
  };
}
