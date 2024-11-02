---
title: Бот поддержки в Telegram
layout: post
date: 2023-03-31
category: dev
tags: [ telegram, support, spring-boot, java ]
tag: Фриланс
---

## Вступление

Как-то раз я сидел никого не трогал как мне написала одноклассница:<br>
`«Привет. Я же правильно понимаю, что ты бота в телеге можешь написать?»`<br>
После этого мы созвонились и начали думать над реализацией и как будет вообще выглядеть бот и т.д.

## Как реализован?

Вся логика обработки тикетов была реализована прямо в Telegram. Так как нужно было сделать дешево и сердито. Было
принято решение не делать веб панель где можно было довольно просто отвечать клиентам, но могу вам сказать что я
сделал даже очень хорошо нативно в Telegram, все было интуитивно и понятно. После получения запроса на поддержку
всем тем кто работает в поддержке бот отправлял сообщение, что появился новый тикет, и его мог взять любой сотрудник.
Взять тикет мог только один сотрудник, но была возможность передать тикет другому сотруднику. У каждого сотрудника были
кнопки взаимодействия, как под клавиатурой, так и на самих сообщениях. Мне удалось хорошо продумать дизайн код чтобы было
удобно. Бот поддерживал обмен картинок и историю чата и многое другое.

## Картинки

После того как пользователь нажимает кнопку `Поддержка` или пишет команду `/support`.<br>
На стороне сотрудника это выглядит
так:

<div class="gallery" onclick="openModal('/images/support/support-new-ticket.PNG')">
     <img src="/images/support/support-new-ticket.PNG" alt="Новый запрос">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Новый запрос" src="/images/support/support-new-ticket.PNG">
</div>

<br>
У каждого сотрудника есть доступ к меню со всеми его тикетами.<br>
По которым он может бегать и управлять

<div class="gallery" onclick="openModal('/images/support/support-menu-ticket.PNG')">
     <img src="/images/support/support-menu-ticket.PNG" alt="Настройки тикета">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Настройки тикета" src="/images/support/support-menu-ticket.PNG">
</div>

<br>
Функциональные кнопки под клавиатурой для сотрудников. Они всегда видны.

<div class="gallery" onclick="openModal('/images/support/support-keyboard-button.PNG')">
     <img src="/images/support/support-keyboard-button.PNG" alt="Функциональные кнопки под клавиатурой">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Функциональные кнопки под клавиатурой" src="/images/support/support-keyboard-button.PNG">
</div>

## А что ещё?

Да много чего еще можно рассказать про этот проект, но всегда нужно знать меру.<br>
Это был мой первый заказ на «фрилансе» и я его выполнил идеально.

Заказчик: [rendallconf.ru](https://rendallconf.ru/)