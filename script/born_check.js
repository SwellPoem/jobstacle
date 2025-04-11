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

document.querySelectorAll('#dob-year, #dob-day, #dob-month').forEach(input => {
    input.addEventListener('focus', () => {
        showReadOnlyAlert(input);
    });
});

function showReadOnlyAlert(input) {
    // Create the alert element
    const alertBox = document.createElement('div');
    alertBox.className = 'readonly-alert';
    alertBox.textContent = 'You can only input your birth date by clicking on the button';

    // Position the alert near the input
    const rect = input.getBoundingClientRect();
    alertBox.style.top = `${rect.top - 30}px`;
    alertBox.style.left = `${rect.left}px`;

    // Append the alert to the body
    document.body.appendChild(alertBox);

    // Remove the alert after 2 seconds
    setTimeout(() => {
        alertBox.remove();
    }, 2000);
}