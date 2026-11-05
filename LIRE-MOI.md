# Test Examen blanc n°1 — UE 2.8

Processus obstructifs. 40 questions, 20 QCS et 20 QCM.

## Installation Netlify

Créer un nouveau dépôt GitHub privé et y déposer tous les fichiers décompressés, en conservant les dossiers public, netlify, scripts et tests. Importer ce dépôt dans un NOUVEAU projet Netlify. Commande de build : npm run build ; dossier publié : public ; fonctions : netlify/functions ; base vide si netlify.toml est à la racine. Ajouter ADMIN_PASSWORD dans les variables d’environnement accessibles aux Functions, puis déployer. Aucun mot de passe n’est inscrit dans le projet. Ne pas publier uniquement public par glisser-déposer.

Stockage indépendant : ue28-examen-blanc-1-data. Conserver le même site et ce nom pour les mises à jour. Les données des autres applications ne sont pas transférées. Exporter régulièrement les résultats Excel.

## Fonctionnement

Nom et prénom obligatoires, sans promotion. Suivant est actif après sélection d’au moins une réponse et valide les choix. Sauvegarde progressive, reprise sur le même navigateur selon autorisation du formateur. La dernière validation envoie automatiquement la copie complète. Pas de bouton Terminer. Chronomètre facultatif, tentatives configurables, accès formateur protégé. Résultats provisoires visibles ; tableau actualisé toutes les 10 secondes ; statistiques des copies terminées avec énoncés et bonnes réponses ; export Excel/CSV.

Une tentative est comptée au démarrage. Le temps continue pendant une interruption. Une copie expirée est clôturée lors d’une requête ou du retour de l’étudiant ; pas de tâche de clôture en arrière-plan. L’identité repose sur les noms déclarés, sans authentification personnelle. Les démarrages simultanés ne sont pas verrouillés par transaction. Internet est nécessaire pour synchroniser les réponses.

## Contenu source

Réponses extraites des options rouges du document fourni pour cette UE. Les contenus médicaux sont reproduits depuis ce corrigé, sans validation clinique indépendante. Les feedbacks reprennent les réponses fournies. Les chiffres d’épidémiologie et les formulations du document n’ont pas été actualisés.

Q21 : lettre B ajoutée à une option non lettrée.
Q21 : lettre C ajoutée à une option non lettrée.

## Vérification

Node.js 22 ou plus récent : npm ci, npm test, npm run build. Effectuer un essai sur votre site Netlify avant diffusion. Les résultats du lien de test ChatGPT sont séparés de ceux de votre site Netlify.
