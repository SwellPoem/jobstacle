// Select the inputs you want to restrict
const restrictedInputs = document.querySelectorAll('#phone-number, #born-location-latitude, #born-location-longitude'); // Add more selectors as needed

restrictedInputs.forEach(input => {
    input.addEventListener('input', () => {
        // Allow only numbers and symbols
        input.value = input.value.replace(/[a-zA-Z]/g, '');
    });
});