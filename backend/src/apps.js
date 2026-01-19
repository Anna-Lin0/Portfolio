import express from "express"

const app = express(); // created an express app

app.use(express.json());

import route from "./routes/contact.route.js"

// routes declaration
app.use("/api/v1/contacts", route)

export default app;
