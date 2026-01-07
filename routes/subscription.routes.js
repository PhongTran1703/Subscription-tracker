import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({ title:'GET all subsciptions' }));

subscriptionRouter.get('/:id', (req, res) => res.send({ title:'GET subsciption details' }));

subscriptionRouter.post('/',authorize , createSubscription);

subscriptionRouter.put('/:id', (req, res) => res.send({ title:'UPDATE subsciption' }));

subscriptionRouter.delete('/:id', (req, res) => res.send({ title:'DELETE subsciption' }));

subscriptionRouter.post('/user/:id',authorize , getUserSubscriptions);

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title:'CANCLE subsciption' }));

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({ title:'GET upcoming renewals' }));


export default subscriptionRouter;