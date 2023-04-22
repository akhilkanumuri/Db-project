import express from "express";
import {getPost, getPosts, addBooking } from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);

router.post("/bookings", addBooking);


export default router;
