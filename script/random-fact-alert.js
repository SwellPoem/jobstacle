// when the script loads, load the json file
// and add the names to the select box
const facts = [];
fetch('./json/facts.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(fact => {
            // for each fact, create a new item in the facts list
            // the fact structure is { "person", "quote" }
            const factItem = {
                person: fact.person,
                quote: fact.quote
            };
            facts.push(factItem);
        });
    })
    .catch(error => console.error('Error fetching names:', error));

function randomFactAlert() {
    if (facts.length === 0) {
        console.error('No facts available');
        return;
    }

    console.log("Beginning to display random fact");

    // Choose a random fact
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];

    // Display the fact in the alert
    const personElement = document.getElementById('person');
    const quoteElement = document.getElementById('quote');
    personElement.textContent = "- " + randomFact.person;
    quoteElement.textContent = randomFact.quote;

    // Generate a random rotation angle between -5 and 5 degrees
    const randomRotation = Math.floor(Math.random() * 11) - 5;

    // Show the alert with random rotation
    const alertContainer = document.getElementById('random-facts-alert');
    const alertContent = alertContainer.querySelector('.alert-content');
    alertContent.style.transform = `rotate(${randomRotation}deg)`;
    alertContainer.style.display = 'block';
}
// Close button functionality
document.getElementById('closebtn').addEventListener('click', () => {
    const alertContainer = document.getElementById('random-facts-alert');
    alertContainer.style.display = 'none';
});

// Trigger the randomFactAlert function every 30 seconds
setInterval(randomFactAlert, 1000 * 15);

