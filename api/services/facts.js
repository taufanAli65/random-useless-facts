const { db } = require("../config/firebase");

async function getFact(factID) {
    const factDoc = await db.collection('facts').doc(factID).get();
    if (!factDoc.exists) {
        throw new Error('Fact not found');
    }
    return factDoc.data();
}

async function getFacts() {
    const factsSnapshot = await db.collection('facts').get();
    return factsSnapshot.docs.map(doc => ({...doc.data() }));
}

async function getRandomFact() {
    const factsSnapshot = await db.collection('facts').get();
    const facts = factsSnapshot.docs.map(doc => ({ ...doc.data() }));
    if (facts.length === 0) {
        throw new Error('No facts available');
    }
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];    
}

async function addFact(fact) {
    const factRef = await db.collection('facts').add(fact);
    return { id: factRef.id, ...fact };
}

async function updateFact(factID, updatedFact) {
    const factRef = db.collection('facts').doc(factID);
    await factRef.update(updatedFact);
    const updatedDoc = await factRef.get();
    return { id: updatedDoc.id, ...updatedDoc.data() };
}

async function deleteFact(factID) {
    const factRef = db.collection('facts').doc(factID);
    await factRef.delete();
    return { id: factID };
}

module.exports = {
    getFact,
    getFacts,
    getRandomFact,
    addFact,
    updateFact,
    deleteFact
};