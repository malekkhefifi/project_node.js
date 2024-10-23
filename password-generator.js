const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12, // Longueur du mot de passe
    numbers: true, // Inclure des chiffres
    symbols: true, // Inclure des symboles
    uppercase: true, // Inclure des lettres majuscules
    lowercase: true // Inclure des lettres minuscules
  });

  console.log('Mot de passe généré :', password);
}

// Appeler la fonction pour générer et afficher le mot de passe
generateRandomPassword();
