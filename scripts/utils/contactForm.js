// Open the popup modal
function openPopup() {
    document.getElementById("contact_modal").style.display = "flex"
}

// Close the popup modal
function closePopup() {
    document.getElementById("contact_modal").style.display = "none"
}

// Validate form inputs
function validateForm() {
    let isValid = true

    // Clear previous error messages
    document.querySelectorAll(".error-message").forEach(element => {
        element.textContent = ""
    });

    // Name validation
    const name = document.getElementById("name").value
    if (!/\b\w+\b(?:.*\b\w+\b){2}/.test(name)) {
        document.getElementById("nameError").textContent = "Le nom doit contenir au moins 3 mots."
        isValid = false
    }

    // Email validation
    const email = document.getElementById("email").value
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent = "S'il vous plaît, mettez une adresse email valide."
        isValid = false
    }

    // Message validation
    const message = document.getElementById("message").value
    if (!/\b\w+\b(?:.*\b\w+\b){2}/.test(message)) {
        document.getElementById("messageError").textContent = "Le message doit contenir au moins 3 mots."
        isValid = false
    }

    return isValid
}

// Submit the form and log the data to the console
function submitForm(event) {
    event.preventDefault()

    if (validateForm()) {
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const message = document.getElementById("message").value

        console.log("Name: " + name)
        console.log("Email: " + email)
        console.log("Message: " + message)

        document.getElementById("popupForm").reset()
        closePopup()
    }
}

// Close the popup when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById("contact_modal")
    if (event.target === modal) {
        closePopup()
    }
}

// Attach the submit event listener to the form
document.getElementById("popupForm").addEventListener("submit", submitForm)