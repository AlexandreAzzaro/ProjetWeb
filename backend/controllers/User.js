import bcrypt from "bcrypt";
import userSchema from "../models/User.js";
//import jwt from "jsonwebtoken"

export default class userCtrl {
  signup = (req, res, next) => {
    bcrypt
      .hash(req.body.password, 10)
      .then((hash) => {
        const user = new userSchema({
          email: req.body.email,
          password: hash,
        });
        user
          .save()
          .then(() => res.status(201).json({ message: "utilisateur créé" }))
          .catch((error) => res.status(500).json({ error }));
      })
      .catch((error) => res.status(500).json({ error }));
  };

  login = (req, res, next) => {
    userSchema.findOne({ email: req.body.email })
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
                ),*/
            });
          })
          .catch((error) => res.status(500).json({ error }));
      })
      .catch((error) => res.status(500).json({ error }));
  };
}
