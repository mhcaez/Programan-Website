function validateForm() {
    // Get the values of the form fields
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var address = document.getElementById('address').value.trim();

    // Validate that the fields are not empty
    if (name === "") {
        alert("Nama tidak boleh kosong.");
        return false; // Prevent form submission
    }
    
    if (email === "") {
        alert("Email tidak boleh kosong.");
        return false; // Prevent form submission
    }
    
    if (address === "") {
        alert("Alamat tidak boleh kosong.");
        return false; // Prevent form submission
    }

    // If everything is filled out, allow the form to submit
    alert("Pendaftaran berhasil!");
    return true;
}
