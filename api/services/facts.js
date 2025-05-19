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
    // Generate a random float between 0 and 1
    const rand = Math.random();

    // Try to find a fact with random >= rand
    let query = db.collection('facts').where('random', '>=', rand).orderBy('random').limit(1);
    let snapshot = await query.get();

    // If none found, wrap around and get the smallest
    if (snapshot.empty) {
        query = db.collection('facts').orderBy('random').limit(1);
        snapshot = await query.get();
    }

    if (snapshot.empty) {
        throw new Error('No facts available');
    }

    // Return the first found document
    const doc = snapshot.docs[0];
    return { id: doc.id, ...doc.data() };
}

async function addFact(fact) {
    const factWithRandom = { ...fact, random: Math.random() };
    const factRef = await db.collection('facts').add(factWithRandom);
    return { id: factRef.id, ...factWithRandom };
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