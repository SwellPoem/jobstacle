document.addEventListener('DOMContentLoaded', function() {
    fetch('./json/names.json')
        .then(response => response.json())
        .then(data => {
            const nameSelect = document.getElementById('name');
            data.forEach(name => {
                const option = document.createElement('option');
                option.value = name;
                option.textContent = name;
                nameSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching names:', error));
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('./json/last_names.json')
        .then(response => response.json())
        .then(data => {
            const nameSelect = document.getElementById('last_name');
            data.forEach(name => {
                const option = document.createElement('option');
                option.value = name;
                option.textContent = name;
                nameSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching names:', error));
});

