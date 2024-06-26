---
sidebar_position: 6
---

# Serveur de la passerelle SMSWithoutBorders
Les serveurs passerelles permettent aux utilisateurs de se synchroniser et de communiquer avec le module éditeur.

:::conseil Ce que vous apprendrez

* Comment configurer et utiliser le serveur Gateway
La version la plus récente de ce guide se trouve dans le [`github reposistory`](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server)

Le frontend s'intègre à ces services. Il se peut que vous deviez les configurer en fonction de la section sur laquelle vous travaillez.

* [`Android App`](https://github.com/smswithoutborders/SMSWithoutBorders-App-Android)

* [`Gateway Client`](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client)

:::

### Exigences

* python3

### Fonctionnalités

* Serveur de courtier en messages pour [Gateway-Client](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client) (_see [SMSWithoutBorders-OpenAPI](https://github.com/smswithoutborders/SMSWithoutBorders-OpenAPI)_ )

* [SMSWithoutBorders-App](https://github.com/smswithoutborders/SMSWithoutBorders-App-Android) synchronisation pour la communication avec[Publisher](https://github.com/smswithoutborders/SMSWithoutBorders-Publisher)

> Il devrait être hébergé au même endroit que [Publisher](https://github.com/smswithoutborders/SMSWithoutBorders-Publisher),parce que Publisher n'est pas _directement_ exposé au web.

* Transmet la demande de publication de[Gateway-Client](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client) à[Publisher](https://github.com/smswithoutborders/SMSWithoutBorders-Publisher)
* Authentifie[Gateway-Client's](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client) demande d'adhésion [Publisher](https://github.com/smswithoutborders/SMSWithoutBorders-Publisher)

### Installation

```bash
https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server.git
git submodule update --force --recursive --init --remote
cd SMSWithoutBorders-Gateway-Server
python3 -m virtualenv venv
. venv/bin/activate
pip3 install -r requirements.txt
```

Optionnellement, lancez `make` pour installer les hooks git

### Structure du répertoire

_/gateway_server_ \
Contient la passerelle [server websocket](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server/tree/main/gateway_server/sessions_websocket.py) qui est nécessaire pour synchroniser les utilisateurs.

### Configuration

#### Configuration de l'API de la passerelle

* Copiez les fichiers de configuration et modifiez le fichier

```bash
cp confs/example.conf.ini confs/conf.ini
```

#### Configuration du serveur de passerelle
* Copiez les fichiers de configuration et modifiez le fichier
```bash
cp gateway_server/confs/example.conf.ini gateway_server/confs/conf.ini
```

#### Utilisation

<a name="synchronization" ></a>

#### API de la passerelle

##### Démarrer manuellement l'API de la passerelle

```bash
. venv/bin/activate
python3 main.py
```

*Obtenir la liste des nœuds disponibles
`/seeds

`
Par exemple

```bash
curl localhost:6969/seeds -H "Content-Type: application/json"
```

Retours

```json
[
 {
   "IMSI": "sample_IMSI",
   "LPS": 1648206122.81431,
   "MSISDN": "sample_MSISDN",
   "seed_type": "seed"
 }
]
```

* Ajouter une passerelle aux passerelles actives
`/ping
`

Par exemple

```bash
curl -X POST \
localhost:6969/seeds/ping \
-d '{"IMSI":"sample_IMSI", "MSISDN":"sample_MSISDN", "seed_type":"seed"}' \
-H "Content-Type: application/json"
```

Renvoie le LPS de la session en cours. LPS = Dernière session ping

#### Synchronisation

La synchronisation est nécessaire pour permettre aux utilisateurs d'acquérir les clés de sécurité, les plateformes et les passerelles disponibles.

##### Configuration manuelle des sessions websocket

```bash
. venv/bin/activate
python3 gateway_server/sessions_websocket.py
```

##### Configurations

Toutes les configurations pour les websockets peuvent être faites dans le fichier `conf.ini` dans le répertoire`gateway_server` \
`session_change_limit` : Nombre de fois où le websocket du client recevra des urls de changement de session.
`session_sleep_timeout` : Nombre de secondes de sommeil après l'envoi d'une url de changement de session au client.
`session_paused_timeout` : Nombre de secondes à rester en état de pause avant de fermer la connexion

##### Flux de synchronisation

1. Commencez par demander une nouvelle session. 

`GET /<api-version>/sync/users/<user-id>` 

Il renvoie une chaîne d'url à laquelle les clients websocket peuvent se connecter. Les utilisateurs peuvent commencer à communiquer avec l'URL renvoyée ou les scanner via la fonction QR scan de l'application.
renvoyée ou les scanner grâce à la fonction QR scan de l'application. La fréquence de changement des urls de synchronisation dépend des paramètres de configuration `[synchro dépend des paramètres de configuration `[sync] session_sleep_timeout` (par défaut = 15 secondes). 

Le nombre total de changements par fréquence peut être modifié dans `[sync] session_change_limit` (valeur par défaut = 3 fois) \N- Le nombre total de changements par fréquence peut être modifié dans `[sync] session_change_limit` (valeur par défaut = 3 fois).

`''`, `200`session créée

`''`, `500` une erreur s'est produite, vérifiez les journaux de débogage

2. Une fois que l'url de synchronisation est connectée et commence le traitement, le websocket envoie un texte de pause `201- pause`. \
L'utilisateur commence à s'authentifier et à ajouter ses politiques de sécurité à son dossier sur le serveur.

3. Une fois que l'utilisateur a effectué la poignée de main nécessaire et que l'échange d'informations a commencé, le websocket envoie un texte d'accusé de réception \N- ack`.
texte d'accusé de réception `200- ack`.
<a name="testing" />

#### Essais

* Test [Modèle d'utilisateur](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server/tree/main/gateway_server/users.py)

```bash
python -m unittest gateway_server/test/UTestUsers.py
```

* Essais [WebSockets](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server/tree/main/gateway_server/sessions_websocket.py)

[https://github.com/vi/websocat](https://github.com/vi/websocat)


_Manjaro_

```bash
sudo pacman -S websocat jq
```

_Test de websocket_

```bash
websocat ws://localhost:6996/v2/sync/init/111/000
```

* Essais [RSA Encryption/Decryption](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server/tree/main/test/security_rsa.py)
Cela nécessitera des fichiers pem. Copiez-les dans le répertoire test/ pour permettre l'exécution des tests.

```bash
python -m unittest test/security_rsa.py
```

* Essais [Entire Handshake process](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server/tree/main/test/handshake.py)
Cela nécessitera des fichiers pem. Copiez-les dans le répertoire test/ pour permettre l'exécution des tests.

```bash
./test/handshake.sh
```