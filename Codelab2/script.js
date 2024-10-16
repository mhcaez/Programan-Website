function calculateSum() {
    // Get the values from the input fields
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    // Ensure both numbers are valid
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = "Please enter valid numbers!";
        return;
    }
    
    // Perform the addition operation
    var result = num1 + num2;
    
    // Display the result
    document.getElementById('result').innerText = "Hasil: " + result;
}

function resetForm() {
    // Clear the input fields
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    
    // Reset the result display
    document.getElementById('result').innerText = 'Hasil: ';
}
