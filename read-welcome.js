const fs = require('fs');

// Lire le contenu de welcome.txt
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur lors de la lecture du fichier:', err);
  } else {
    console.log(data); // Afficher le contenu dans la console
  }
});
