const express = require("express");
const router = express.Router();
const { getFactHandler,
    getFactsHandler,
    getRandomFactHandler,
    addFactHandler,
    updateFactHandler,
    deleteFactHandler } = require("../controllers/facts");

router.get("/:id", async (req, res) => { getFactHandler(req, res) });
router.get("/", async (req, res) => { getFactsHandler(req, res) });
router.get("/random", async (req, res) => { getRandomFactHandler(req, res) });
router.post("/", async (req, res) => { addFactHandler(req, res) });
router.put("/:id", async (req, res) => { updateFactHandler(req, res) });
router.delete("/:id", async (req, res) => { deleteFactHandler(req, res) });

module.exports = router;