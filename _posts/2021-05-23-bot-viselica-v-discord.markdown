---
title: Бот Виселица в Discord
layout: post
date: 2021-05-23
category: dev
tags: [ hangman, discord, java ]
tag: Pet-project
---

## Несколько слов

После того как я набрался знаний на Java я решил создать какой-то сервис, который бы приносил пользу обычным людям. Мне
пришло в голову сделать Hangman бот в Discord. Вообще это не первый мой бот который я сделал для этой платформы.
Кстати бот полностью OpenSource: [GitHub Hangman](https://github.com/megoRU/HangmanDiscordBot)

## Как реализован?

Саму логику поначалу я хотел найти в интернете, но путного там ничего не нашел и мне пришлось самому написать логику,
кстати она доступна всем [ТЫК](https://github.com/megoRU/Hangman). В момент создания бота я еще очень плохо понимал ООП и как создавать игры для 
несколько игроков, чтобы они не мешали друг другу. Но в процессе я быстро понял что можно игры хранить в коллекции:

`ConcurrentMap<Long, Hangman> activeHangman = new ConcurrentHashMap<>();`

Следующая проблема, которую предстояло решить, — это откуда брать слова для игр.
В первую очередь я был нацелен на английскую аудиторию, и проблем с поиском слов не было.
Я нашел сервис, у которого можно было одним запросом получить все слова, что я и сделал. Затем я решил разделить код на микросервисы.
У меня была запущена своя API для получения слов, которая, кстати, доступна. [ТУТ](https://api.megoru.ru).

## Какие новые функции появились спустя 2 года?

1. Теперь играть можно в соревновательном режиме против других игроков. `/competitive`
2. Появилась доска почёта: `/leadboard`
3. Полностью проведен рефакторинг кода. Много что сломалось, но починил быстро.
4. Теперь можно играть вместе с неограниченным количеством игроков.
5. Реализовал поддержку игры против ChatGPT.

## Как строились запросы?

GET: `https://api.megoru.ru/api/word`

<div class="gallery" onclick="openModal('/images/hangman/REST.png')">
     <img src="/images/hangman/REST.png" alt="Запрос к API">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Запрос к API" src="/images/hangman/REST.png">
</div>

## Картинки

С помощью команды `/hg` любой игрок может создать игру. Кстати недавно добавил поддержку
совместной игры. `/multi @user`

<div class="gallery" onclick="openModal('/images/hangman/hangman-start-game.png')">
     <img src="/images/hangman/hangman-start-game.png" alt="Запуск игры">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Запуск игры" src="/images/hangman/hangman-start-game.png">
</div>

<br>
А вот так засчитывает введенные буквы

<div class="gallery" onclick="openModal('/images/hangman/hangman-letters.png')">
     <img src="/images/hangman/hangman-letters.png" alt="Считывания букв">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Считывания букв" src="/images/hangman/hangman-letters.png">
</div>

<br>
Кстати логотип и сами картинки статуса игры делал на заказ у замечательной [девушки](https://vk.com/club103481761).

<div class="gallery" onclick="openModal('/images/hangman/end-game.png')">
     <img src="/images/hangman/end-game.png" alt="Конец игры">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Конец игры" src="/images/hangman/end-game.png">
</div>

## Куда будет двигаться проект в будущем?

На самом деле проект уже можно сказать полностью сделан и добавлять туда почти нечего. Скорее всего это конец разработки
и поддержки обновлениями. Нужно двигаться дальше, но не забывать с чего начинал свой путь.
