import express from "express";
import { getAnuncio } from "./http/get.js";
import { postAnuncio } from "./http/post.js";
import { updateAnuncio } from "./http/update.js";
import { deleteAnuncio } from "./http/delete.js";
const router = express.Router();

router.get("/", getAnuncio);
router.post("/post", postAnuncio);
router.post('/update', updateAnuncio)
router.delete('/delete', deleteAnuncio)

export default router;
