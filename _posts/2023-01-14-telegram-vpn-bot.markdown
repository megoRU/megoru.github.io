---
title: Telegram бот для заказа VPN
layout: post
date: 2023-01-14
category: dev
tags: [telegram, vpn, spring-boot, java]
tag: Коммерческий
---

### Дисклеймер

> Использование VPN должно соответствовать законам Российской Федерации и исключать любые вредоносные действия, массовые рассылки или нарушения законодательства.

##  Несколько слов

Из-за известных проблем в моей стране, возросла потребность в качественном VPN. На рынке было много подобных сервисов, но все они
были либо дорогими, либо качество у них было на уровне бесплатных. Поначалу я использовал Wireguard VPN который настраивался вручную и
это было неудобно, клиентов было уже достаточно и я решил что нужно двигаться дальше. На просторах интернета я нашел OpenSource
[проект](https://github.com/wg-easy/wg-easy) с красивым и простым web интерфейсом. Но время шло и мне это тоже наскучило.
Я подумывал сделать Telegram бота, чтобы это всё автоматизировать и да у меня это в очередной раз получилось. Я написал свою библиотеку для
работы с `wg-easy`: [wg-easy-wrapper](https://github.com/megoRU/wg-easy-wrapper) и [3x-ui](https://github.com/megoRU/3x-ui-wrapper). А далее оставалось только сделать Telegram бота. И спустя месяцы я уже выкатил
стабильную сборку на прод и конверсия клиентов возросла в `1000 %`. Это самый успешный коммерческий проект, который я создал.

##  Как реализован?

Как обычные Telegram боты. Были реализованы сервисы для взаимодействия с API [MHSanaei/3x-ui](https://github.com/MHSanaei/3x-ui): `Включить`/`выключить`/`создать config`/`получить конфиг`.

## Картинки

Вот UML диаграмма работы бота. (Устарела немного)

<div class="gallery" onclick="openModal('/images/vpn/vpn_bot.jpg')">
     <img src="/images/vpn/vpn_bot.jpg" alt="UML диаграмма">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="UML диаграмма" src="/images/vpn/vpn_bot.jpg">
</div>

<br>
Панель управления конфигом

<div class="gallery" onclick="openModal('/images/vpn/vpn_config.jpeg')">
     <img src="/images/vpn/vpn_config.jpeg" alt="Панель управления конфигом" style="width: 500px;">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Панель управления конфигом" src="/images/vpn/vpn_config.jpeg">
</div>

<br>
Скачивание конфига для WireGuard

<div class="gallery" onclick="openModal('/images/vpn/vpn_download.PNG')">
     <img src="/images/vpn/vpn_download.PNG" alt="Скачивание конфига для WireGuard" style="width: 350px;">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Скачивание конфига для WireGuard" src="/images/vpn/vpn_download.PNG">
</div>

<br>