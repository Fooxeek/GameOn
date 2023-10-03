function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    closeModal();
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fermer le modal lorsque le bouton de fermeture est cliqué
closeModalBtn.addEventListener("click", closeModal);

function closeModal() {
  const reserveForm = document.forms["reserve"];
  reserveForm.reset();
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
  const firstNameInput = document.getElementById("first");
  const lastNameInput = document.getElementById("last");
  const emailInput = document.getElementById("email");
  const birthdateInput = document.getElementById("birthdate");
  const quantityInput = document.getElementById("quantity");
  const locationInputs = document.querySelectorAll('input[name="location"]');
  const checkboxInput = document.getElementById("checkbox1");

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const birthdate = birthdateInput.value;
  const quantity = parseInt(quantityInput.value);

  const firstNameError = document.getElementById("firstError");
  const lastNameError = document.getElementById("lastError");
  const emailError = document.getElementById("emailError");
  const birthdateError = document.getElementById("birthdateError");
  const quantityError = document.getElementById("quantityError");
  const locationError = document.getElementById("radioError");
  const checkboxError = document.getElementById("checkboxError");

  // Réinitialisez les messages d'erreur et les bordures rouges
  firstNameError.style.display = "none";
  lastNameError.style.display = "none";
  emailError.style.display = "none";
  birthdateError.style.display = "none";
  locationError.style.display = "none";
  checkboxError.style.display = "none";
  quantityError.style.display = "none";

  // Réinitialisez les bordures rouges pour les champs de saisie
  firstNameInput.classList.remove("invalid-input");
  lastNameInput.classList.remove("invalid-input");
  emailInput.classList.remove("invalid-input");
  birthdateInput.classList.remove("invalid-input");

  // Validation du prénom
  if (firstName.length < 2 || !/^[A-Za-z\-]+$/.test(firstName)) {
    // Le prénom n'est pas valide, affichez le message d'erreur
    firstNameError.style.display = "block";
    firstNameInput.classList.add("invalid-input"); // Ajoutez la classe pour mettre en rouge le champ de saisie
    firstNameInput.focus();
    return false;
  }

  // Validation du nom
  if (lastName.length < 2 || !/^[A-Za-z\-]+$/.test(lastName)) {
    // Le nom n'est pas valide, affichez le message d'erreur
    lastNameError.style.display = "block";
    lastNameInput.classList.add("invalid-input"); // Ajoutez la classe pour mettre en rouge le champ de saisie
    lastNameInput.focus();
    return false;
  }

  // Validation de l'e-mail
  if (!isValidEmail(email)) {
    // L'e-mail n'est pas valide, affichez le message d'erreur
    emailError.style.display = "block";
    emailInput.classList.add("invalid-input"); // Ajoutez la classe pour mettre en rouge le champ de saisie
    emailInput.focus();
    return false;
  }

  // Validation de la date de naissance
  if (birthdate.trim() === "") {
    // La date de naissance est vide, affichez le message d'erreur
    birthdateError.style.display = "block";
    birthdateInput.classList.add("invalid-input"); // Ajoutez la classe pour mettre en rouge le champ de saisie
    birthdateInput.focus();
    return false;
  }

  // Réinitialisez le message d'erreur
  if (isNaN(quantity) || quantity < 0 || quantity > 99) {
    // La quantité n'est pas valide, affichez le message d'erreur
    quantityError.style.display = "block";
    quantityInput.focus();
    return false;
  }

  // Validation de la sélection de la ville
  let locationSelected = false;
  for (const locationInput of locationInputs) {
    if (locationInput.checked) {
      locationSelected = true;
      break;
    }
  }

  if (!locationSelected) {
    // Aucune ville n'a été sélectionnée, affichez le message d'erreur
    locationError.style.display = "block";
    return false;
  }

  // Validation de la case à cocher (conditions d'utilisation)
  if (!checkboxInput.checked) {
    // La case à cocher n'est pas cochée, affichez le message d'erreur
    checkboxError.style.display = "block";
    return false;
  }

  return true;
}

// Récupérer les éléments des deux formulaires
const reserveForm = document.forms["reserve"];
const confirmationForm = document.getElementById("confirmation-form");
const submitButton = document.getElementsByClassName("btn-submit")[0];

// Écouter l'événement de soumission du formulaire de réservation
reserveForm.addEventListener("submit", function (event) {
  // Empêcher l'envoi du formulaire par défaut
  event.preventDefault();

  // Valider le formulaire avant de le soumettre
  if (validate()) {
    // Le formulaire est valide, masquez le formulaire de réservation
    reserveForm.style.display = "none";

    // Affichez le formulaire de confirmation
    confirmationForm.style.display = "block";
  }
});
