---
layout: page
title: Обо мне
permalink: /about/
---

<div class="about-me">
    <p>Проживаю в городе Санкт-Петербург, мне <span id="age"></span> лет, я Java Backend Developer. Обучался в Skillbox и активно работаю над своими пет-проектами и фрилансом. Увлекаюсь новыми технологиями, включая React.js, TypeScript и Swift, и всегда ищу возможности для роста и совершенствования в сфере разработки.</p>
</div>

<script>
    const birthDate = new Date('1999-04-29');
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const isBeforeBirthday = today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    document.getElementById('age').textContent = isBeforeBirthday ? age - 1 : age;
</script>


### Связаться со мной

Почта: [contact@megoru.ru](mailto:contact@megoru.ru)

Telegram: <a href="https://tel/legram" onclick="this.href=this.href
.replace(/tel/,'t.me')
.replace(/legram/,'mego_RU')" target="_blank">@mego_RU</a>
