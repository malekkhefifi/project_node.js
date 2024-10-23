const fs = require('fs');

// Créer un fichier welcome.txt avec le contenu "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.error('Erreur lors de la création du fichier:', err);
  } else {
    console.log('Fichier welcome.txt créé avec succès.');
  }
});
