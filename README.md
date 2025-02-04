# Planetary - Application de Gestion de Contenu

## Description
Planetary est une application web moderne développée avec Vue.js + Vite.js + Ionic et intégrant le système de paiement Stripe. Elle permet aux utilisateurs de louer des planètes et de gérer leurs profils personnels. L'application offre une interface utilisateur fluide et réactive, facilitant la navigation et l'interaction avec les fonctionnalités proposées.

## Fonctionnalités

- Authentification utilisateur : Les utilisateurs peuvent se connecter, s'inscrire et gérer leurs profils personnels.
- Gestion des abonnements : Accès à la location de diverses planètes payantes via des abonnements gérés par Stripe.
- Navigation Intuitive : Menu latéral pour une navigation facile entre les différentes sections de l'application.
- Interface Réactive : Conçue pour une utilisation optimale sur divers appareils, y compris les mobiles et les tablettes.

## Prérequis

- Node.js (version 14 ou supérieure)
- Vite.js
- Ionic
- Compte Stripe pour la gestion des paiements

## Installation

### Cloner le dépôt :

- git clone https://github.com/xSpaKs/final_project_front

### Accéder au répertoire du projet :

- cd planetary

### Installer les dépendances :

- npm install

### Configurer les variables d'environnement :

- Créez un fichier .env à la racine du projet et ajoutez l'URL de l'API :
    - API_URL="http://127.0.0.1:8001/api/"
    - Remplacez your_stripe_public_key par votre clé publique Stripe.

### Démarrer l'application :

- npm run dev
- L'application sera accessible à l'adresse http://localhost:3000.

