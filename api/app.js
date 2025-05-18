const express = require('express');
const cors = require('cors');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: '*' })); // allow all origins
app.use(express.json());

const factsRouter = require('./routes/facts');

app.use("/", factsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});