
// Get elements from HTML
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");

const error = document.getElementById("error");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");


// Convert button click
convertBtn.addEventListener("click", function () {

    // Get input value
    const temperature = parseFloat(temperatureInput.value);

    // Get selected unit
    const unit = unitSelect.value;


    // Clear previous error
    error.textContent = "";


    // Check if input is empty or not a valid number
    if (temperatureInput.value.trim() === "" || isNaN(temperature)) {

        error.textContent = "Please enter a valid number.";

        clearResults();

        return;
    }


    // Variables for converted temperatures
    let celsius;
    let fahrenheit;
    let kelvin;


    // Conversion based on selected unit
    if (unit === "celsius") {

        celsius = temperature;

        // Check absolute zero
        if (celsius < -273.15) {
            error.textContent =
                "Temperature cannot be below absolute zero (-273.15°C).";

            clearResults();

            return;
        }

        fahrenheit = (celsius * 9 / 5) + 32;

        kelvin = celsius + 273.15;
    }


    else if (unit === "fahrenheit") {

        fahrenheit = temperature;

        // Check absolute zero
        if (fahrenheit < -459.67) {
            error.textContent =
                "Temperature cannot be below absolute zero (-459.67°F).";

            clearResults();

            return;
        }

        celsius = (fahrenheit - 32) * 5 / 9;

        kelvin = celsius + 273.15;
    }


    else if (unit === "kelvin") {

        kelvin = temperature;

        // Check absolute zero
        if (kelvin < 0) {
            error.textContent =
                "Temperature cannot be below absolute zero (0 K).";

            clearResults();

            return;
        }

        celsius = kelvin - 273.15;

        fahrenheit = (celsius * 9 / 5) + 32;
    }


    // Display results
    celsiusResult.textContent =
        celsius.toFixed(2) + " °C";

    fahrenheitResult.textContent =
        fahrenheit.toFixed(2) + " °F";

    kelvinResult.textContent =
        kelvin.toFixed(2) + " K";
});


// Function to clear results
function clearResults() {

    celsiusResult.textContent = "-- °C";

    fahrenheitResult.textContent = "-- °F";

    kelvinResult.textContent = "-- K";
}