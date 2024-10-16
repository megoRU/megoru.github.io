---
title: Бот для Инвестиций в Telegram
layout: post
date: 2023-05-15
category: dev
tags: [ telegram, investing, spring-boot, java ]
tag: Pet-project
---

## Вступление

Тинькофф попал под санкции и его приложения были удалены из App Store, а следовательно уведомления перестали работать.
Мне как инвестору нужно было получать уведомления по движениям цены акции. Но увы уведомления же не работают. Так вот
мне пришла идея сделать Telegram бота, который будет брать цены из брокера, и уведомлять если цена достигла
определенного значения. В итоге за 24 часа я сделал бота, который решил проблему миллионов клиентов Тинькофф.

Кстати если вы хотите послушать ещё больше по этому поводу у меня есть свой [подкаст](https://megoru.ru/podcast).

Выпуски которые духовно связаны с этой темой.

1. [Решил проблему миллионов клиентов Тинькофф Инвестиций](https://podcasts.apple.com/ru/podcast/%D1%80%D0%B5%D1%88%D0%B8%D0%BB-%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D1%83-%D0%BC%D0%B8%D0%BB%D0%BB%D0%B8%D0%BE%D0%BD%D0%BE%D0%B2-%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-%D1%82%D0%B8%D0%BD%D1%8C%D0%BA%D0%BE%D1%84%D1%84-%D0%B8%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%86%D0%B8%D0%B9/id1680803539?i=1000613966910)
2. [Спец выпуск: Мама я Инвестор](https://podcasts.apple.com/ru/podcast/%D1%81%D0%BF%D0%B5%D1%86-%D0%B2%D1%8B%D0%BF%D1%83%D1%81%D0%BA-%D0%BC%D0%B0%D0%BC%D0%B0-%D1%8F-%D0%B8%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%BE%D1%80/id1680803539?i=1000609267267)

## Как реализован?

Довольно просто. Цены я получаю одним запросом по всем имеющимся тикерам, далее проверяю цены которые пришли с теми что
сохранены у пользователей и уведомляю в случае если цена больше, меньше или равняется. А вот с объёмами куда сложнее для
начало нужно было... А вот уже это коммерческая тайна.

## Тинькофф решил бороться со мной

Недавно я получил сообщение на почту, с инструкцией как на IOS 16.4 вернуть уведомления. Я конечно очень сильно
разочаровался, так как зарабатывать на этом проекте я буду меньше. Но данный фикс придумал даже не Тинькофф, а сама
Apple и работал он только на последних актуальных обновлениях. Поэтому у меня еще оставались клиенты, которым мой проект
был очень нужен. Но я стал думать как бы еще можно было изменить проект, чтобы оставаться на плаву. И идея мне пришла
от [клиента](https://www.tinkoff.ru/invest/social/profile/zhur4vlev), который потом стал внештатным консультантом по
вопросам дизайна Telegram бота и по вопросам касающийся инвестиций. И спустя месяц тестов появилась функция проверки
объёмов покупки акций.

## Картинки

Меню аккаунта.

<div class="gallery" onclick="openModal('/images/invest/invest-account.PNG')">
     <img src="/images/invest/invest-account.PNG" alt="Меню аккаунта" style="width: 600px;">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Меню аккаунта" src="/images/invest/invest-account.PNG">
</div>

<br>
Подписки на акции и не только.

<div class="gallery" onclick="openModal('/images/invest/invest-subscribers.PNG')">
     <img src="/images/invest/invest-subscribers.PNG" alt="Подписки на акции и не только" style="width: 350px;">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Подписки на акции и не только" src="/images/invest/invest-subscribers.PNG">
</div>

<br>
Настройки объёмов.

<div class="gallery" onclick="openModal('/images/invest/invest-volume-settings.PNG')">
     <img src="/images/invest/invest-volume-settings.PNG" alt="Настройки объемов" style="width: 400px;">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Настройки объемов" src="/images/invest/invest-volume-settings.PNG">
</div>

<br>
Уведомления о достижении цены акции.

<div class="gallery" onclick="openModal('/images/invest/invest-price-notice.jpg')">
     <img src="/images/invest/invest-price-notice.jpg" alt="Уведомления о достижении цены акции" style="width: 700px;">
</div>

<div id="myModal" class="modal" onclick="closeModal()">
     <span class="close">&#215;</span>
     <img class="modal-content" id="modalImg" alt="Уведомления о достижении цены акции" src="/images/invest/invest-price-notice.jpg">
</div>

## Какое будущее у проекта?

Оптимизация всех функций до идеала.