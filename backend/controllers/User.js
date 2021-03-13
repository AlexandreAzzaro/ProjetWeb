import bcrypt from "bcrypt";
import userSchema from "../models/User.js";
//import jwt from "jsonwebtoken"

export default class userCtrl {
  signup = async (req, res, next) => {
    //let hashpass = await bcrypt.hash(req.body.password, 10);
    //req.body.password = hashpass;
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

  /*login = async (req, res, next) => {
    try {
      let user = await userSchema.findOne({ username: req.body.username });
      if (!user) {
        return res.status(401).json({ error: "utilisateur inconnu" });
      }
      try {
        await bcrypt.compare(req.body.password, user.password);
        if (!valid) {
          return res.status(401).json(false);
        }
        return res.status(200).json(true);
        //console.log(userId)
      } catch (error) {
        return res.status(500).json(error);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  };*/

  login = async (req, res, next) => {
    let oneUsr;
    try {
      oneUsr = await userSchema.findOne({
        username: req.body.username,
      });
      console.log(oneUsr)
      if(!oneUsr){
        throw ("l'utilisateur n'existe pas")
      }
      return res.json(true)
      /*try {
        await bcrypt.compare(req.body.password, user.password);
        if (!valid) {
          return res.status(401).json(false);
        }
        return res.status(200).json(true);
        //console.log(userId)
      } catch (error) {
        return res.status(500).json(error);
      }*/
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  isUsernameExist = async (req, res, next) => {
    try {
      let usrName = await userSchema.findOne({
        username: req.params.username,
      });
      if (!usrName) {
        throw (false);
     }
      return res.status(200).json(true);
    } catch (error) {
      return res.status(404).json(error);
    }
  };

  isEmailExist = async (req, res, next) => {
    try {
      let usrMail = await userSchema.findOne({
        email: req.params.email,
      });
      if (!usrMail) {
        throw (false);
     }
      return res.status(200).json(true);
    } catch (error) {
      return res.status(404).json(error);
    }
  };

  getOneUsr = async (req, res, next) => {
    try {
      let oneUsr = await userSchema.findOne({
        username: req.params.username,
      });
      if (!oneUsr) {
        throw ("L'utilisateur n'existe pas");
     }
      return res.status(200).json(oneUsr);
    } catch (error) {
      return res.status(404).json(error);
    }
  };

  getAllUsr = async (req, res, next) => {
    try {
      let allUsr = await userSchema.find();
      return res.status(200).json(allUsr);
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  modifyUsr = (req, res, next) => {
    const newUsr = new userSchema({
      ...req.body
    });
    userSchema.updateOne({ _id: req.params.id }, newUsr)
      .then(() =>
        res.status(201).json({ message: "User updated successfully!" })
      )
      .catch((error) => res.status(400).json(error));
  };
}
