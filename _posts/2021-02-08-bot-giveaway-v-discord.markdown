---
title: Бот Giveaway в Discord
layout: post
date: 2021-02-08
category: dev
tags: [ giveaway, discord, java ]
tag: Pet-project
---

## Несколько слов

Сейчас пойдет рассказ о том как я сделал лучшего бота для Giveaway в Discord у которого нет конкурентов, но он так и не 
смог стать популярным, ввиду того что я не смог оплачивать рекламу из-за проблем в моей стране. Этим ботом я могу
гордиться да как и всеми, так как они бесплатные и выполняют свою задачу на 100 %. Кстати он так же OpenSource: [GitHub Giveaway](https://github.com/megoRU/GiveawayDiscordBot)

## Как реализован?

Основная задача бота это собирать участников, и причем нужно собирать так, чтобы ни один участник не потерялся. Поэтому
нужно было разработать такую систему которая бы раз N минут могла проверять данные с Discord и с Базой Данных моего
сервиса. Не знаю как другие выбирают победителей, но я использую для этого API [random.org](https://www.random.org/),
благо там бесплатный доступ полностью покрывает весь трафик моих ботов. А кстати у меня для этого сервиса есть своё API
доступная по этому [адресу](https://api.megoru.ru/).

## Какие новые функции появились спустя 2 года?

Теперь можно устанавливать свой цвет для раздачи, блокировать определенные роли, планировать раздачи и вносить множество других изменений. 
Рефакторинг кода не удался, и я дважды подвел крупный Discord канал из-за проблем с проверкой участников. Но сейчас все проблемы успешно решены.

## Как строились запросы?

POST: `https://api.megoru.ru/api/participants`

<div class="gallery" onclick="openModal('/images/giveaway/giveaway-post.png')">
     <img src="/images/giveaway/giveaway-post.png" alt="Запрос к API">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Запрос к API" src="/images/giveaway/giveaway-post.png">
</div>

## Картинки

Через команду `/start` можно было с легкостью создать Giveaway. На самом деле команд было куча. От получения списка
участников, до провидения по расписанию и перевыбор участника.

<div class="gallery" onclick="openModal('/images/giveaway/giveaway-command-start.png')">
     <img src="/images/giveaway/giveaway-command-start.png" alt="Команда /start">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Команда /start" src="/images/giveaway/giveaway-command-start.png">
</div>

<br>
Теперь пришло время показать как выглядит сообщение с запущенным Giveaway

<div class="gallery" onclick="openModal('/images/giveaway/giveaway-start-work.png')">
     <img src="/images/giveaway/giveaway-start-work.png" alt="Команда /start в действии">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Команда /start в действии" src="/images/giveaway/giveaway-start-work.png">
</div>

<br>
Самое время подвести итоги!

<div class="gallery" onclick="openModal('/images/giveaway/giveaway-stop.png')">
     <img src="/images/giveaway/giveaway-stop.png" alt="Команда /stop в действии">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Команда /stop в действии" src="/images/giveaway/giveaway-stop.png">
</div>

## Куда будет двигаться проект в будущем?

Сейчас нет времени что-то выпускать для этого сервиса, так как есть коммерческие проекты которые приносят деньги, а
выпускать обновления для бесплатных сервисов желания увы нет. Миром правят деньги.