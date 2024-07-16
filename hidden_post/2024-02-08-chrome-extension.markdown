---
title: Расширение для браузера Chrome

layout: post
date: 2024-02-08
category: dev
tags: [ JavaScript, html, css, spring-boot, java ]
tag: Pet-project
---

### Дисклеймер

> Да я знаю что давно уже есть аналог, я решил углубиться в создание расширений для Chrome поэтому мне было всё равно. 
> [SponsorBlock](https://sponsor.ajay.app). Моё приложение доступно тут: [YouTubeAdSkipper](https://github.com/megoRU/YouTubeAdSkipper)

## Что за расширение ты делаешь?

Идею для расширения в браузере я вынашивал примерно два года, несмотря на ограниченное свободное время из-за инвестиций 
и коммерческих проектов. Наконец, удалось приступить к реализации. Позвольте перейти от вступления к сути.

Расширение предназначено исключительно для YouTube, его основной функцией является автоматическое пропускание 
встроенной рекламы от авторов. Это своего рода AdBlock на максималках, который поддерживается сообществом, но об этом я расскажу чуть позже.

## Как реализован?

Реализовано с использованием нативного JavaScript. Возможно, в будущем перепишу на TypeScript, так как он ближе к идеологии Java. 
Позвольте сразу сказать, что мой уровень знания JavaScript находится на начальном уровне, поэтому некоторый "говнокод" неизбежен.

При открытии любого видеоролика, скрипт запрашивает у моего API данные о времени появления рекламы в ролике. 
Если пользователь досмотрел видео до момента рекламы, она автоматически пропускается. Если при запросе к API не нашло данных,
то расширение предложит добавить вручную, и эти данные уже будут валидны для последующих пользователей, но с пометкой не верифицировано.

## Картинки

Меню добавления таймкодов
<div class="gallery" onclick="openModal('/images/chrome/main-ui.png')">
     <img src="/images/chrome/main-ui.png" alt="Настройки расширения">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Настройки расширения" src="/images/chrome/main-ui.png">
</div>

Так выглядит верифицированное видео
<div class="gallery" onclick="openModal('/images/chrome/verified-video-menu.png')">
     <img src="/images/chrome/verified-video-menu.png" alt="верифицированное видео">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="верифицированное видео" src="/images/chrome/verified-video-menu.png">
</div>

Так выглядит меню видео на модерации
<div class="gallery" onclick="openModal('/images/chrome/no-verified-video-menu.png')">
     <img src="/images/chrome/no-verified-video-menu.png" alt="видео на модерации">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="видео на модерации" src="/images/chrome/no-verified-video-menu.png">
</div>