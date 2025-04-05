document.getElementById('born-check').addEventListener('change', function() {
    const dobGroup = document.querySelector('.dob-group');
    if (this.checked) {
        dobGroup.style.display = 'flex';
    } else {
        dobGroup.style.display = 'none';
    }
});

document.getElementById('born-check').addEventListener('change', function() {
    const dobGroup = document.querySelector('.dob-group');
    if (this.checked) {
        dobGroup.style.display = 'flex';
    } else {
        dobGroup.style.display = 'none';
    }
});

document.getElementById('random-dob').addEventListener('click', function() {
    const randomDate = new Date(
        new Date().getFullYear() - Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28) + 1
    );

    document.getElementById('dob-day').value = String(randomDate.getDate()).padStart(2, '0');
    document.getElementById('dob-month').value = String(randomDate.getMonth() + 1).padStart(2, '0');
    document.getElementById('dob-year').value = randomDate.getFullYear();
});