document.getElementById("convertBtn").addEventListener("click", function() {
    // Get input value
    var celsiusInput = parseFloat(document.getElementById("celsius").value);
    
    // Check if input is a valid number
    if (!isNaN(celsiusInput)) {
        // Convert Celsius to Fahrenheit
        var fahrenheitOutput = (celsiusInput * 9/5) + 32;
        
        // Display the result in the Fahrenheit input field
        document.getElementById("fahrenheit").value = fahrenheitOutput.toFixed(2);
    } else {
        // If input is not a valid number, display an error message
        alert("Please enter a valid number for Celsius temperature.");
    }
});
