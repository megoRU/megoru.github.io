---
title: API между SaleBot и 3X-UI
layout: post
date: 2023-11-10
category: dev
tags: [ salebot, 3xui, spring-boot, java ]
tag: Фриланс
---

## Несколько слов

Недавно ко мне обратился клиент по рекомендации знакомого, так как его задачу невозможно было решить с помощью конструктора. 
Из-за нехватки времени я редко беру заказы, но этот проект оказался интересным. 
Вместо полной переписки бота я решил сделать микросервис, что оказалось более эффективным решением.

## Как реализован?

Реализован обычный RESTful API, который взаимодействует между SaleBot и панелью 3X-UI. Использовал свою самописную библиотеку, которую применяю в проекте VPN. 
Требовалось реализовать три запроса: создание, выключение и пересоздание конфига.

## Картинки

<div class="gallery" onclick="openModal('/images/salebot/intellij.png')">
     <img src="/images/salebot/intellij.png" alt="Структура проекта">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Структура проекта" src="/images/salebot/intellij.png">
</div>