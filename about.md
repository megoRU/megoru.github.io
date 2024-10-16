---
layout: page
title: Обо мне
permalink: /about/
---

<div class="about-me">
    <p>Проживаю в городе Санкт-Петербург, мне <span id="age"></span> <span id="age-word"></span>, я Java Backend Developer. Обучался в Skillbox и активно работаю над своими пет-проектами и фрилансом. Увлекаюсь новыми технологиями, включая React.js, TypeScript и Swift, и всегда ищу возможности для роста и совершенствования в сфере разработки.</p>
</div>

<script>
    const birthDate = new Date('1999-04-29');
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const isBeforeBirthday = today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

    const actualAge = isBeforeBirthday ? age - 1 : age;
    document.getElementById('age').textContent = actualAge;

    let ageWord;
    if (actualAge % 10 === 1 && actualAge % 100 !== 11) {
        ageWord = 'год';
    } else if ((actualAge % 10 >= 2 && actualAge % 10 <= 4) && (actualAge % 100 < 10 || actualAge % 100 >= 20)) {
        ageWord = 'года';
    } else {
        ageWord = 'лет';
    }

    document.getElementById('age-word').textContent = ageWord;
</script>

<style>
#age { 
padding: 0;
margin-top: 0;
}

#age-word {
padding: 0;
margin-top: 0;
}
</style>

### Связаться со мной

Почта: [contact@megoru.ru](mailto:contact@megoru.ru)

Telegram: <a href="https://tel/legram" onclick="this.href=this.href
.replace(/tel/,'t.me')
.replace(/legram/,'mego_RU')" target="_blank">@mego_RU</a>

