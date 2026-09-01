---
sidebar_position: 1
---

# راهنمای میزبانی و اجرای شماره های مسیریابی

این راهنمای ساده را دنبال کنید تا یک شماره مسیریابی Deku SMS را روی دستگاه اندرویدی خود راه‌اندازی و پیکربندی کنید.

## پیش‌نیازهای راه‌اندازی یک شماره مسیریابی:

### دستگاه اندروید:
دستگاه شما باید قادر به اتصال به اینترنت باشد.  
باید دارای یک سیم‌کارت باشد که توانایی دریافت پیامک را داشته باشد.

### اتصال اینترنت:
شما به یک اتصال اینترنت قابل اعتماد (Wi-Fi یا داده موبایل) نیاز دارید.  
Deku SMS از داده بسیار کمی استفاده می‌کند، بنابراین داده موبایل کافی است.

## مراحل پیکربندی Deku SMS روی دستگاه اندروید:

### مرحله 1: دانلود برنامه Deku SMS
می‌توانید برنامه Deku SMS را از یکی از منابع زیر دانلود کنید:
- Google Play Store  
- F-Droid  
- GitHub Releases  

### مرحله 2: تنظیم Deku SMS به عنوان برنامه پیش‌فرض پیامک

<img src="/GatewayHosting/1.png" alt="GatewayAvailable" class="resized-image"/>

پس از نصب برنامه، آن را به عنوان برنامه پیش‌فرض پیامک در دستگاه اندرویدی خود تنظیم کنید.

### مرحله 3: پیکربندی انتقال پیام

<img src="/GatewayHosting/2.png" alt="GatewayAvailable" class="resized-image"/>

برنامه Deku SMS را باز کنید.  
روی سه نقطه در گوشه بالا سمت راست برنامه ضربه بزنید.  
از منوی کشویی، گزینه Message Forwarding را انتخاب کنید.

### مرحله 4: افزودن سرور Gateway

<img src="/GatewayHosting/3.png" alt="GatewayAvailable" class="resized-image"/>
<img src="/GatewayHosting/4.png" alt="GatewayAvailable" class="resized-image"/>
<img src="/GatewayHosting/5.png" alt="GatewayAvailable" class="resized-image"/>

روی نقاط منو در گوشه بالا سمت راست صفحه پیام‌های مسیردهی شده ضربه بزنید.  
روی سه نقطه در گوشه بالا سمت راست صفحه پیام‌های مسیریابی شده ضربه بزنید.  
دوباره روی سه نقطه ضربه بزنید و گزینه Add HTTPS Forwarders را انتخاب کنید.

### مرحله 5: وارد کردن اطلاعات مورد نیاز
<img src="/GatewayHosting/6.png" alt="GatewayAvailable" class="resized-image"/>
<img src="/GatewayHosting/7.png" alt="GatewayAvailable" class="resized-image"/>

آدرس زیر را وارد کنید:  
https://gatewayserver.smswithoutborders.com/v3/publish  

Tag: یک نام برای سرور Gateway خود وارد کنید.  

گزینه "All" را انتخاب کنید: مطمئن شوید که تیک "All" فعال است تا همه پیامک‌ها از طریق سرور ارسال شوند.

### مرحله 6: نهایی‌سازی تنظیمات

<img src="/GatewayHosting/8.png" alt="GatewayAvailable" class="resized-image"/>

روی Save ضربه بزنید تا تنظیمات سرور Gateway ذخیره شود.

<img src="/GatewayHosting/9.png" alt="GatewayAvailable" class="resized-image"/>

## شماره مسیریابی شما اکنون آماده است

اکنون می‌توانید شماره خود را با کاربران RelaySMS به اشتراک بگذارید. دستگاه اندرویدی شما به عنوان یک شماره مسیریابی عمل خواهد کرد و به مسیریابی پیام‌ها از طریق برنامه Deku SMS کمک می‌کند.