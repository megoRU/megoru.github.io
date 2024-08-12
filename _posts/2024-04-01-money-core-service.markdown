---
title: Сервис по учёту расходов и доходов
layout: post
date: 2024-04-01
category: dev
tags: [ telegram, spring-boot, java, typescript, react.js ]
tag: Pet-project
---

## Вступление

Изначально этот проект был реализован в виде Telegram-бота, однако позже было принято решение перенести его на веб-платформу. 
Возникла идея создать конкурентоспособный сервис среди аналогичных. В нашем проекте уже реализован функционал семейного счета, 
а также множество других возможностей.

## Как реализован?

Для API был выбран Spring Boot, а для SSR (Server-Side Rendering) - React.js. 
В рамках проекта было принято решение отойти от традиционного создания учетных записей. Вместо этого предусмотрена авторизация через Telegram.

## Картинки

Web версия: 

<div class="gallery" onclick="openModal('/images/money/web.png')">
     <img src="/images/money/web.png" alt="Веб версия">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Веб версия" src="/images/money/web.png">
</div>

## Как выглядел проект в реализции Telegram-бота (больше не поддерживается)

Статистика за месяц:

<div class="gallery" onclick="openModal('/images/money/statistics.PNG')">
     <img src="/images/money/statistics.PNG" alt="Статистика за месяц">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Статистика за месяц" src="/images/money/statistics.PNG">
</div>

<br>

Транзакции за день:

<div class="gallery" onclick="openModal('/images/money/transactions.PNG')">
     <img src="/images/money/transactions.PNG" alt="Транзакции за день">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Транзакции за день" src="/images/money/transactions.PNG">
</div>


## Какое будущее у проекта?

Много чего запланировано, например редактирование транзакций, перенос на другой день и так далее.
В планах перейти на своё решение для построения графиков.