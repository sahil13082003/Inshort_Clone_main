import express from "express";

import {
    getNews
} from "../controller/news-controller.js";

const route = express.Router();


// routs general
route.get("/news", getNews);

export default route;