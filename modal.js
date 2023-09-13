function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close"); // Sélectionnez le bouton de fermeture

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fermer le modal lorsque le bouton de fermeture est cliqué
closeModalBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

// Fonction pour vérifier si l'e-mail est valide
function isValidEmail(email) {
  // Expression régulière pour valider une adresse e-mail
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Utilisez test() pour vérifier si l'e-mail correspond à l'expression régulière
  return emailRegex.test(email);
}

// Fonction pour valider le formulaire
function validate() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  if (!isValidEmail(email)) {
    // L'e-mail n'est pas valide, affichez un message d'erreur ou effectuez une action appropriée
    alert("L'adresse e-mail n'est pas valide. Veuillez entrer une adresse e-mail valide.");
    emailInput.focus(); // Mettez le focus sur le champ d'e-mail pour faciliter la correction
    return false; // Empêche l'envoi du formulaire
  }

  // L'e-mail est valide, continuez avec le traitement du formulaire
  return true;
}


// Fonction de validation pour s'assurer qu'au moins un bouton radio est sélectionné
function validateLocation() {
  const locationInputs = document.querySelectorAll('input[name="location"]');
  let isAnyLocationSelected = false;

  locationInputs.forEach((input) => {
    if (input.checked) {
      isAnyLocationSelected = true;
    }
  });

  if (!isAnyLocationSelected) {
    alert("Veuillez sélectionner au moins une option de localisation.");
    return false;
  }

  return true;
}

// Fonction de validation pour le formulaire
function validateForm(event) {
  const checkBoxInput = document.getElementById("checkbox1");

  if (!checkBoxInput.checked) {
    alert("Vous devez accepter les conditions d'utilisation pour continuer.");
    event.preventDefault(); // Empêche l'envoi du formulaire si la case à cocher n'est pas cochée
  }
}

// Attachez la fonction validateForm au formulaire lorsque le document est prêt
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form[name='reserve']");
  if (form) {
    form.addEventListener("submit", validateForm);
  }
});




