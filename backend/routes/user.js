import express from 'express';
const router = express.Router();

import { userById, read, update } from '../controllers/user';
import { requireSignin, isAuth, isAdmin } from "../controllers/auth";

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    })
});

router.param('userId', userById);

router.get('/user/:userId', requireSignin, isAuth, read);
router.put('/user/:userId', requireSignin, isAuth, update);


module.exports = router;