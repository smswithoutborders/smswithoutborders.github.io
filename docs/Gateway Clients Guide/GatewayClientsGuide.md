---
sidebar_position: 1
---

# Routing Numbers

Routing numbers are a core part of how RelaySMS works. They are phone numbers or devices in areas with active internet connectivity that route messages from offline users to online platforms.

When a user sends a message through RelaySMS without internet access, the message is delivered via SMS to a routing number. That number forwards the message to an online server where it is processed and published to the selected platform.

Within the app, routing numbers are listed under the Countries tab. Users should select a number in a region with internet connectivity to successfully send messages.

Routing numbers can be set up using the DekuSMS app. Expanding availability across regions improves reliability, reduces cost, and helps more users stay connected during internet shutdowns.

## Hosting and Running a Routing Number

Follow this guide to set up and configure a Deku SMS routing number on your Android device.

### Requirements for Setting Up a Routing Number:

#### Android Device:

- Your device must be able to connect to the internet.  
- It should have a SIM card capable of receiving SMS messages.

#### Internet Connection:

- You will need a reliable internet connection (Wi-Fi or mobile data).  
- Deku SMS uses very little data, so mobile data is sufficient.

## Steps to Configure Deku SMS on an Android Device:

### Step 1: Download the Deku SMS App

You can download the Deku SMS app from one of the following sources:

- Google Play Store  
- F-Droid  
- GitHub Releases  

### Step 2: Set Deku SMS as Your Default SMS App

<img src="/mockup/Deku/1.png" alt="GatewayAvailable" class="resized-image"/>

Once the app is installed, set it as the default SMS app on your Android device.

### Step 3: Configure Message Forwarding

<img src="/mockup/Deku/2.png" alt="GatewayAvailable" class="resized-image"/>
<img src="/mockup/Deku/3.png" alt="GatewayAvailable" class="resized-image"/>


1. Open the Deku SMS app.  
2. Tap on the three dots in the top right corner of the app.  
3. From the dropdown menu, select **Message Forwarding.**

### Step 4: Add a Gateway Server

<img src="/mockup/Deku/4.png" alt="GatewayAvailable" class="resized-image"/>
<img src="/mockup/Deku/5.png" alt="GatewayAvailable" class="resized-image"/>
<img src="/mockup/Deku/6.png" alt="GatewayAvailable" class="resized-image"/>


1. Tap on the menu dots in the top right corner of the routed messages page.  
2. Tap on the three dots in the top right corner of the routed messages page.  
3. Tap the three dots once more and choose **Add HTTPS Forwarders.**

### Step 5: Fill in the Required Information

<img src="/mockup/Deku/7.png" alt="GatewayAvailable" class="resized-image"/>
<img src="/mockup/Deku/8.png" alt="GatewayAvailable" class="resized-image"/>

- Enter the following URL:  
https://gatewayserver.smswithoutborders.com/v3/publish  

- **Tag**: Enter a name for your gateway server.  

- **Check "All"**: Ensure the "All" checkbox is checked to route all SMS messages through the server.

### Step 6: Finalize the Setup

<img src="/mockup/Deku/9.png" alt="GatewayAvailable" class="resized-image"/>

1. Tap **Save** to save your gateway server configuration.

<img src="/mockup/Deku/10.png" alt="GatewayAvailable" class="resized-image"/>

## Your Routing Number Is Now Ready

You can now share your number with RelaySMS users. Your Android device will act as a routing number, helping route messages through the Deku SMS app.