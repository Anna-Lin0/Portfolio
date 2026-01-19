import { Router } from "express";
import { storeContact } from "../controllers/contact.controllers.js";

const route = Router();

route.route("./store").post(storeContact);

export default route