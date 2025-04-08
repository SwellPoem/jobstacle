document.getElementById('random-dob').addEventListener('click', function() {
    console.log('random dob');

    const randomDate = new Date(
        new Date().getFullYear() - Math.floor(Math.random() * 100), // Random year within the last 100 years
        Math.floor(Math.random() * 12), // Random month
        Math.floor(Math.random() * 28) + 1 // Random day
    );

    document.getElementById('dob-day').value = String(randomDate.getDate()).padStart(2, '0');
    document.getElementById('dob-month').value = String(randomDate.getMonth() + 1).padStart(2, '0');
    document.getElementById('dob-year').value = randomDate.getFullYear();
});