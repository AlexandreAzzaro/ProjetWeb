import express from "express";
import stuffCtrl from '../controllers/stuff.js'
import auth from '../middleware/auth.js';

const ctrl = new stuffCtrl();
const authent = new auth();
const router = express.Router();

router.get('/', authent.auth, ctrl.getAllStuff);
router.post('/', authent.auth, ctrl.createThing);
router.get('/:id', authent.auth, ctrl.getOneThing);
router.put('/:id', authent.auth, ctrl.modifyThing);
router.delete('/:id', authent.auth, ctrl.deleteThing);

export default router;  