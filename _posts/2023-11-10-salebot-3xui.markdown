---
title: Микросервис для работы с Salebot и 3X-UI

layout: post
date: 2023-11-10
category: dev
tags: [ salebot, 3xui, spring-boot, java ]
tag: Фриланс
---

## Несколько слов

Как обычно мне заказы приносят знакомые. В этот раз не исключение. Редко берусь за какие-то заказы, так как сейчас мало времени. 
Знакомый направил клиента ко мне, так как сделать это на конструкторе не было возможности.
Сначала я хотел полностью переписать им бота, но в итоге проще оказалось сделать микросервис.

## Как реализован?

Обычный RESTful API который общается между SaleBot и 3X-UI панелью. Довольно просто реализован, использовал свою самописную библиотеку которую использую для своего проекта VPN.
Из требований нужно было сделать 3 запроса. На создание, выключение и пересоздание конфига. 

## Давай уже картинки показывай

<div class="gallery" onclick="openModal('/images/salebot/intellij.png')">
     <img src="/images/salebot/intellij.png" alt="Структура проекта">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Структура проекта" src="/images/salebot/intellij.png">
</div>