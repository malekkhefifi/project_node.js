const nodemailer = require('nodemailer');

// Créer un transporteur
const transporter = nodemailer.createTransport({
  service: 'gmail', // Utilise un service comme Gmail
  auth: {
    user: 'malekkhefifi5@gmail.com', // Remplace par ton adresse email
    pass: '', // Remplace par ton mot de passe (ou mot de passe d'application)
  },
});

// Définir les options de l'email
const mailOptions = {
  from: '', // Remplace par ton adresse email
  to: '', // Remplace par l'adresse email du destinataire
  subject: 'Test Email',
  text: 'Bonjour ! Ceci est un test d\'envoi d\'email.',
};

// Envoyer l'email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Erreur lors de l\'envoi de l\'email:', error);
  }
  console.log('Email envoyé avec succès:', info.response);
});
