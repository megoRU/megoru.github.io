---
title: Сервис по учёту расходов и доходов
layout: post
date: 2023-11-29
category: dev
tags: [ telegram, spring-boot, java ]
tag: Pet-project
---

## Вступление

Данный сервис писал можно сказать по приколу, вообще есть идеи сделать хорошего конкурента
всем другим подобным сервисам. Есть реализация семейного счёта и много других функций.

Кто хочет поучаствовать в закрытом и открытом тесте: [MoneyCoreBot](https://t.me/MoneyCoreBot)

## Как реализован?

Обычный Spring Boot проект. Сделал нормальную пагинацию по месяцам и дням. Удобный интерфейс взаимодействия.

## А хоть картинки то покажешь?

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

UPD: 01.02.2024 проект в данный момент закрыт. Возможно вернется в виде приложения под IOS.
Как вариант эти наработки пойдут для API всем желающим.

Много чего запланировано, например редактирование транзакций, перенос на другой день и так далее.
В планах перейти на своё решение для построения графиков.

<div class="gallery" onclick="openModal('/images/money/roadmap.jpg')">
     <img src="/images/money/roadmap.jpg" alt="Roadmap проекта">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Roadmap проекта" src="/images/money/roadmap.jpg">
</div>