import express from "express";
import { getAnuncio } from "./http/get.js";
import { getUser } from "./http/get.js";
import { postAnuncio } from "./http/post.js";
import { updateAnuncio } from "./http/update.js";
import { updateUser } from "./http/update.js";
import { deleteAnuncio } from "./http/delete.js";
import { enviarCorreo } from "./email.js";
const router = express.Router();

router.get("/", getAnuncio);
router.get('/resend', enviarCorreo)
router.get('/user', getUser)
router.post("/post", postAnuncio);
router.post('/update', updateAnuncio)
router.post('/updateUser', updateUser)
router.delete('/delete', deleteAnuncio)

export default router;
