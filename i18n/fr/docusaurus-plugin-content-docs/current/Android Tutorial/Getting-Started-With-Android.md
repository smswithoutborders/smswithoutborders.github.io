---
sidebar_position: 1
---

# Application RelaySMS pour Android

## Bien démarrer avec Android

RelaySMS permet aux utilisateurs de rester connectés à leurs plateformes en ligne même lorsque l’accès à Internet est indisponible. En utilisant la messagerie SMS, les utilisateurs peuvent continuer à communiquer et leurs contacts reçoivent les messages en ligne comme d’habitude.

## Introduction

RelaySMS vous aide à envoyer des messages en ligne **sans avoir besoin d’Internet**.  
Il fonctionne de **deux manières :**

## [1. Utiliser Offline RelaySMS Mail (Aucune configuration requise)](/docs/Bridges%20Tutorial/Bridges)

## **2. Utiliser des plateformes (Inscription et configuration nécessaire à l’avance)**

Cette méthode est idéale si vous souhaitez publier sur des plateformes comme **Gmail, Bluesky ou Telegram** pendant des coupures d’Internet en utilisant vos propres comptes.

### Étapes pour utiliser la fonctionnalité Plateforme :

1. **Télécharger l’application RelaySMS.**

- [Google Play Store](https://play.google.com/store/apps/details?id=com.afkanerd.sw0b)
- [Github](https://github.com/smswithoutborders/SMSwithoutBorders-Android/releases/tag/v1.0)
- Ou compiler depuis la [source](https://github.com/smswithoutborders/SMSwithoutBorders-Android)

<img src="/Android/Playstore.png" class="resized-image"/>

2. **Passez l’onboarding pour vous familiariser.**
- Cliquez sur **Make app default** (optionnel)

*(Images conservées inchangées)*

3. **Créer un compte :**
- Appuyez sur **Sign Up**
- Entrez votre email ou numéro de téléphone + mot de passe
- Cochez la politique de confidentialité
- Cliquez sur **Create**
- Entrez le code Recaptcha

4. **Vous avez déjà un compte ?**
Appuyez sur **Login**, entrez vos informations et le code Recaptcha.

5. **Vérifiez votre téléphone**
- Entrez le code SMS reçu puis cliquez sur **Submit**

6. **Enregistrer vos plateformes :**
- Ouvrez l’onglet **Platforms**
- Choisissez Gmail, Twitter ou Telegram
- Appuyez sur **Add Platform**

7. **Choisir un numero de routage :**
- Ouvrez l’onglet **Country**
- Sélectionnez un numéro et appuyez sur **Make Default**
- Vous pouvez ajouter votre propre gateway via **Add Number**

8. **Envoyer un message :**
- Sur la page **Recent**, appuyez sur l’icône **Compose**
- Choisissez une plateforme sauvegardée
- Rédigez votre message puis appuyez sur **Send**
- Confirmez le numero de routage

*NB : Si RelaySMS n’est pas votre application SMS par défaut, il vous sera demandé d’en choisir une.*

### Comment utiliser la fonctionnalité de stockage de jetons sur l’appareil

La fonction **Store Tokens On-Device** stocke vos jetons d’accès **sur votre appareil**, et non sur les serveurs RelaySMS.

#### Activer le stockage local :
1. Ouvrez **RelaySMS**
2. Allez dans **Settings**
3. Allez dans **Publishing**
4. Activez **Store tokens on-device**

#### Désactiver :
- Désactivez le toggle dans **Settings > Publishing**

#### Rafraîchir les jetons Twitter (local uniquement) :
1. Après l’envoi d’un tweet, vous recevrez un SMS contenant un jeton mis à jour.
2. Copiez le SMS complet.
3. Ouvrez l’onglet **Inbox**
4. Collez le SMS
5. Le jeton sera extrait automatiquement.

## [How to Use the On-Device Token Storage Feature](/docs/On-Device%20Tutorial/On-DeviceToken)
