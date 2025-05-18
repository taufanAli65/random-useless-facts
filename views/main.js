const API_BASE = 'https://random-useless-facts.vercel.app/';

async function fetchRandomFact() {
    document.getElementById('random-fact').textContent = 'Loading...';
    try {
        const res = await fetch(API_BASE);
        const data = await res.json();
        document.getElementById('random-fact').textContent = data.fact?.fact || 'No fact found.';
    } catch (e) {
        document.getElementById('random-fact').textContent = 'Error fetching fact.';
    }
}

// Initial load
fetchRandomFact();
