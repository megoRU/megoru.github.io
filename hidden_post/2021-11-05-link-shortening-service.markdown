---
title: Сервис по коротким ссылкам
layout: post
date: 2021-11-05
category: dev
tags: [ bit.ly, spring-boot, java ]
tag: Pet-project
---

## Несколько слов

После защиты дипломного проекта я решил более углубиться в изучении Spring Boot, Hibernate и т. д. Вообще у меня не было
определенной задачи или цели на этот проект. В этом проекте я тестировал авторизацию и немного HTML, CSS, JS. Кстати
проект доступен [тут](https://github.com/megoRU/LinkShortening).

## Как реализован?

Реализована регистрация и авторизация. После успешного входа пользователь попадал в веб морду, где мог создать короткую
ссылку из другой ссылки. Короткая ссылка генерировалась через UUID. А далее через определенный контроллер UUID искался
в `<K, V>` коллекции и перенаправлял уже на конечную ссылку. Ничего сложного.

## Давай уже картинки показывай

Главная страница сервиса.

<div class="gallery" onclick="openModal('/images/shortening/link-shortening-main.png')">
     <img src="/images/shortening/link-shortening-main.png" alt="Главная страница">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Главная страница" src="/images/shortening/link-shortening-main.png">
</div>
<br>
Страница с авторизацией.

<div class="gallery" onclick="openModal('/images/shortening/link-shortening-login.png')">
     <img src="/images/shortening/link-shortening-login.png" alt="Главная страница">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Главная страница" src="/images/shortening/link-shortening-login.png">
</div>

<br>
Веб панель где можно было создавать короткие ссылки и ими управлять.

<div class="gallery" onclick="openModal('/images/shortening/link-shortening-web-panel.png')">
     <img src="/images/shortening/link-shortening-web-panel.png" alt="Главная страница">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Главная страница" src="/images/shortening/link-shortening-web-panel.png">
</div>