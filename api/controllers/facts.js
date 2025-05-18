const { getFact,
    getFacts,
    getRandomFact,
    addFact,
    updateFact,
    deleteFact } = require('../services/facts');


async function getFactHandler(req, res) {
    try {
        const factID = req.params.id;
        const fact = await getFact(factID);
        res.status(200).json({message: "Here's a Useless Fact U Wanted", fact})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error", error: error.message});
    }
}

async function getFactsHandler(req, res) {
    try {
        const facts = await getFacts();
        res.status(200).json({message:"Here's a List of Useless Fact U Didn't Need to Know", facts: facts})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error", error: error.message});
    }
}

async function getRandomFactHandler(req, res) {
    try {
        const fact = await getRandomFact();
        res.status(200).json({message: "Here's a Random Useless Fact U Didn't Need to Know", fact})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error", error: error.message});
    }
}

async function addFactHandler(req, res) {
    try {
        const fact = req.body;
        const newFact = await addFact(fact);
        res.status(201).json({message: "Useless Fact Added", fact: newFact})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error", error: error.message});
    }
}

async function updateFactHandler(req, res) {
    try {
        const factID = req.params.id;
        const updatedFact = req.body;
        const fact = await updateFact(factID, updatedFact);
        res.status(200).json({message: "Useless Fact Updated", fact: fact})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error", error: error.message});
    }
}

async function deleteFactHandler(req, res) {
    try {
        const factID = req.params.id;
        const fact = await deleteFact(factID);
        res.status(200).json({message: "Useless Fact Deleted", fact: fact})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error", error: error.message});
    }
}

module.exports = {
    getFactHandler,
    getFactsHandler,
    getRandomFactHandler,
    addFactHandler,
    updateFactHandler,
    deleteFactHandler
};