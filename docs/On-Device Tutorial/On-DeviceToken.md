---
sidebar: false
unlisted: true
---

# How to Use the On-Device Token Storage Feature

Our **"Store Tokens On-Device"** feature gives you more control over your account credentials by keeping your access tokens on your phone instead of on the RelaySMS servers. This tutorial walks you through how to enable or disable this feature and how to refresh Twitter tokens when using local storage.

### Enabling On-Device Token Storage

To start storing your access tokens locally on your device:

- Open the **RelaySMS** app.

- Tap on **Settings**.

- Go to the **Security** section.

- Find the toggle for **“Store tokens on-device”** and switch it ON.

<img src="/OnDeviceToken/1.png" alt="add-message" class="resized-image"/>
<img src="/OnDeviceToken/2.png" alt="add-message" class="resized-image"/>
<img src="/OnDeviceToken/3.png" alt="add-message" class="resized-image"/>
<img src="/OnDeviceToken/4.png" alt="add-message" class="resized-image"/>
<img src="/OnDeviceToken/5.png" alt="add-message" class="resized-image"/>

### What happens next?

- All access tokens that were previously stored on RelaySMS servers will be securely transferred to your device.

- From now on, all new tokens will only be stored locally on your phone.

### Disabling On-Device Token Storage

To stop using local token storage and go back to storing tokens on the cloud:

1. Go to **Settings** > **Security**.

2. Switch the **“Store tokens on-device”** toggle **OFF**.

### What this means:

- The tokens that are a **lready stored on your device** will remain there and continue to work.

- However, **new tokens** generated after this will be saved to the **RelaySMS cloud server**, not your device.

<!-- add images -->
<img src="/OnDeviceToken/5.png" alt="add-message" class="resized-image"/>
<img src="/OnDeviceToken/4.png" alt="add-message" class="resized-image"/>
<img src="/OnDeviceToken/3.png" alt="add-message" class="resized-image"/>

### Refreshing Twitter Tokens (For On-Device Use Only)

Due to Twitter's security limitations, tokens stored on your device can only be used **once per tweet**. To send another tweet, you’ll need to **revoke and restore** the token.

Here’s how:

1. After sending a tweet, you’ll receive an **SMS delivery status message**. If you're using an on-device token, this message will include a **refreshed Twitter token.**

2. **Copy the entire SMS message** (as-is).

3. Open the **RelaySMS app** and go to the **Inbox** section.

4. **Paste** the full SMS message into the inbox.

5. The app will automatically extract and refresh your Twitter token.
after every Twitter message

6. You’re now ready to send your next tweet.

<img src="/OnDeviceToken/6.png" alt="add-message" class="resized-image"/>
<img src="/OnDeviceToken/7.png" alt="add-message" class="resized-image"/>
<img src="/OnDeviceToken/8.png" alt="add-message" class="resized-image"/>
<img src="/OnDeviceToken/9.png" alt="add-message" class="resized-image"/>
<img src="/OnDeviceToken/10.png" alt="add-message" class="resized-image"/>

Repeat this process **after every Twitter message** if you're using local token storage.
