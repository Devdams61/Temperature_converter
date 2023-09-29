document.addEventListener('DOMContentLoaded', function () {
    const celsiusInput = document.getElementById('celsius');
    const convertButton = document.getElementById('convertButton');
    const resultDisplay = document.getElementById('result');

    convertButton.addEventListener('click', function () {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            const kelvin = celsius + 273.15;
            resultDisplay.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)}K`;
        } else {
            resultDisplay.textContent = 'Please enter a valid temperature in Celsius.';
        }
    });
});