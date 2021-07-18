import express from 'express';
import { create, list, remove, update, categoryById } from '../controllers/category';
import { requireSignin, isAdmin, isAuth } from '../controllers/auth';
import { userById } from '../controllers/user';


const router = express.Router();

router.param("userId", userById);


router.get('/categories', list);

router.post("/categories/create/:userId", requireSignin, isAuth, isAdmin, create);

router.param('categoryId', categoryById);

router.put('/categories/:categoryId', update);

// router.post('/categories', create);

router.delete('/categories/:categoryId/:userId', requireSignin, isAuth, isAdmin, remove);




module.exports = router;