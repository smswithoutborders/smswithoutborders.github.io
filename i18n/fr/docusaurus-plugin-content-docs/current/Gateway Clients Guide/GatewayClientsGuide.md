---
sidebar_position: 1
---


# Guide d’hebergement et d’execution des numeros de routage

Suivez ce guide simple pour configurer et mettre en place un numero de routage Deku SMS sur votre appareil Android.

## Exigences pour la configuration d’un numero de routage :

### Appareil Android :
Votre appareil doit pouvoir se connecter à Internet.  
Il doit disposer d’une carte SIM capable de recevoir des messages SMS.

### Connexion Internet :
Vous aurez besoin d’une connexion Internet fiable (Wi-Fi ou données mobiles).  
Deku SMS utilise très peu de données, donc les données mobiles sont suffisantes.

## Étapes pour configurer Deku SMS sur un appareil Android :

### Étape 1 : Télécharger l’application Deku SMS
Vous pouvez télécharger l’application Deku SMS à partir de l’une des sources suivantes :
- Google Play Store  
- F-Droid  
- GitHub Releases  

### Étape 2 : Définir Deku SMS comme application SMS par défaut

<img src="/GatewayHosting/1.png" alt="GatewayAvailable" class="resized-image"/>

Une fois l’application installée, définissez-la comme application SMS par défaut sur votre appareil Android.

### Étape 3 : Configurer le transfert de messages

<img src="/GatewayHosting/2.png" alt="GatewayAvailable" class="resized-image"/>

Ouvrez l’application Deku SMS.  
Appuyez sur les trois points en haut à droite de l’application.  
Dans le menu déroulant, sélectionnez Transfert de messages.

### Étape 4 : Ajouter un serveur Gateway

<img src="/GatewayHosting/3.png" alt="GatewayAvailable" class="resized-image"/>
<img src="/GatewayHosting/4.png" alt="GatewayAvailable" class="resized-image"/>
<img src="/GatewayHosting/5.png" alt="GatewayAvailable" class="resized-image"/>

Appuyez sur les points de menu en haut à droite de la page des messages routés.  
Appuyez sur les trois points en haut a droite de la page des messages routes.  
Appuyez à nouveau sur les trois points et choisissez Ajouter des forwarders HTTPS.

### Étape 5 : Remplir les informations requises
<img src="/GatewayHosting/6.png" alt="GatewayAvailable" class="resized-image"/>
<img src="/GatewayHosting/7.png" alt="GatewayAvailable" class="resized-image"/>

Entrez l’URL suivante :  
https://gatewayserver.smswithoutborders.com/v3/publish  

Tag : Entrez un nom pour votre serveur Gateway.  

Cochez "All" : Assurez-vous que la case "All" est cochée pour acheminer tous les messages SMS via le serveur.

### Étape 6 : Finaliser la configuration

<img src="/GatewayHosting/8.png" alt="GatewayAvailable" class="resized-image"/>

Appuyez sur Enregistrer pour sauvegarder la configuration de votre serveur Gateway.

<img src="/GatewayHosting/9.png" alt="GatewayAvailable" class="resized-image"/>

## Votre numero de routage est maintenant pret

Vous pouvez maintenant partager votre numero avec les utilisateurs de RelaySMS. Votre appareil Android agira comme un numero de routage, aidant a acheminer les messages via l’application Deku SMS.