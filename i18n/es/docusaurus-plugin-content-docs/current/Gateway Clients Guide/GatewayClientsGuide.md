---
sidebar_position: 1
---

# Guia para alojar y ejecutar numeros de enrutamiento

Siga esta guia sencilla para configurar y establecer un numero de enrutamiento de Deku SMS en su dispositivo Android.

## Requisitos para configurar un numero de enrutamiento:

### Dispositivo Android:
Su dispositivo debe poder conectarse a Internet.  
Debe tener una tarjeta SIM capaz de recibir mensajes SMS.

### Conexión a Internet:
Necesitará una conexión a Internet confiable (Wi-Fi o datos móviles).  
Deku SMS utiliza muy pocos datos, por lo que los datos móviles son suficientes.

## Pasos para configurar Deku SMS en un dispositivo Android:

### Paso 1: Descargar la aplicación Deku SMS
Puede descargar la aplicación Deku SMS desde una de las siguientes fuentes:
- Google Play Store  
- F-Droid  
- GitHub Releases  

### Paso 2: Establecer Deku SMS como aplicación de SMS predeterminada

<img src="/GatewayHosting/1.png" alt="GatewayAvailable" class="resized-image"/>

Una vez instalada la aplicación, configúrela como la aplicación de SMS predeterminada en su dispositivo Android.

### Paso 3: Configurar el reenvío de mensajes

<img src="/GatewayHosting/2.png" alt="GatewayAvailable" class="resized-image"/>

Abra la aplicación Deku SMS.  
Toque los tres puntos en la esquina superior derecha de la aplicación.  
En el menú desplegable, seleccione Message Forwarding.

### Paso 4: Añadir un servidor Gateway

<img src="/GatewayHosting/3.png" alt="GatewayAvailable" class="resized-image"/>
<img src="/GatewayHosting/4.png" alt="GatewayAvailable" class="resized-image"/>
<img src="/GatewayHosting/5.png" alt="GatewayAvailable" class="resized-image"/>

Toque los puntos del menú en la esquina superior derecha de la página de mensajes enrutados.  
Toque los tres puntos en la esquina superior derecha de la pagina de mensajes enrutados.  
Toque nuevamente los tres puntos y elija Add HTTPS Forwarders.

### Paso 5: Completar la información requerida
<img src="/GatewayHosting/6.png" alt="GatewayAvailable" class="resized-image"/>
<img src="/GatewayHosting/7.png" alt="GatewayAvailable" class="resized-image"/>

Ingrese la siguiente URL:  
https://gatewayserver.smswithoutborders.com/v3/publish  

Tag: Ingrese un nombre para su servidor Gateway.  

Marque "All": Asegúrese de que la casilla "All" esté marcada para enrutar todos los mensajes SMS a través del servidor.

### Paso 6: Finalizar la configuración

<img src="/GatewayHosting/8.png" alt="GatewayAvailable" class="resized-image"/>

Toque Save para guardar la configuración de su servidor Gateway.

<img src="/GatewayHosting/9.png" alt="GatewayAvailable" class="resized-image"/>

## Su numero de enrutamiento ahora esta listo

Ahora puede compartir su numero con usuarios de RelaySMS. Su dispositivo Android actuara como un numero de enrutamiento, ayudando a enrutar mensajes a traves de la aplicacion Deku SMS.