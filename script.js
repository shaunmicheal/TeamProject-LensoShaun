function convertTemperature() {
    let inputValue = document.getElementById("inputValue").value;
    let conversionType = document.getElementById("conversionType").value;
    let result = document.getElementById("result");

    if (inputValue === "") {
        result.textContent = "Please enter a temperature.";
        return;
    }

    let temperature = Number(inputValue);

    if (conversionType === "cTOf") {
        let fahrenheit = (temperature * 9 / 5) + 32;
        result.textContent = `${temperature}°C = ${fahrenheit.toFixed(2)}°F`;
    } else {
        let celsius = (temperature - 32) * 5 / 9;
        result.textContent = `${temperature}°F = ${celsius.toFixed(2)}°C`;
    }
}