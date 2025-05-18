const express = require("express");
const router = express.Router();
const { getFactHandler,
    getFactsHandler,
    getRandomFactHandler,
    addFactHandler,
    updateFactHandler,
    deleteFactHandler } = require("../controllers/facts");

router.get("/fact/:id", async (req, res) => { getFactHandler(req, res) });
router.get("/all", async (req, res) => { getFactsHandler(req, res) });
router.get("/", async (req, res) => { getRandomFactHandler(req, res) });
router.post("/add", async (req, res) => { addFactHandler(req, res) });
router.put("/edit/:id", async (req, res) => { updateFactHandler(req, res) });
router.delete("/delete/:id", async (req, res) => { deleteFactHandler(req, res) });

module.exports = router;