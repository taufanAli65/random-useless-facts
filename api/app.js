const express = require('express');
const cors = require('cors');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Rate limiter middleware (e.g., 100 requests per 15 minutes per IP)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

app.use(cors({ origin: '*' })); // allow all origins
app.use(express.json());

const factsRouter = require('./routes/facts');

app.use("/", factsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});