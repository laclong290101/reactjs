import express from 'express';
import { create, list, read, remove, productById, update, photo } from '../controllers/product';
import { userById } from '../controllers/user';
import { requireSignin, isAdmin, isAuth } from '../controllers/auth';


const router = express.Router();

router.param("userId", userById);


router.get('/product', list);

router.put('/product/:productId', update)

router.param('productId', productById);

router.get('/product/:productId', read);

// router.post('/product', create);

router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);

router.delete('/product/:productId', remove);

router.get("/product/photo/:productId", photo)



module.exports = router;