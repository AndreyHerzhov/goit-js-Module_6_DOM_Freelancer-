// 1

const firstEx = document.querySelector('[data-say-hi="yes"]')
console.log(firstEx.dataset.sayHi) // yes

const btnEl = document.querySelector('button[type="button"]')
console.log(btnEl.dataset.action) // submit

// 2

const list = document.querySelector('.list')
console.log(list.lastElementChild.textContent) // Йончи

// 3

const listOfLikes = document.querySelectorAll('.like')
console.log(listOfLikes)
 
//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
// Задача №1.
// Получить в переменную элемент с атрибутом data-say-hi
// и прочитать значение этого атрибута
<div data-say-hi="yes">Привет!</div>


// Задача №2.
// Получить в переменную элемент с текстом Йончи
<ul>
	<li>Корчи</li>
	<li>Йончи</li>
</ul>

// Задача №3.
// Получить в переменную коллекцию элементов с классом like
<div class="like"></div>
<div class="subscribe"></div>
<div class="like subscribe"></div>

// Задача №4.
// Куда добавится <li>Текст</li> ?

// JS
const list = document.querySelectorAll('ul');
list.insertAdjacentHTML(
	'beforeend',
	'<li>Текст</li>'
);

// HTML
<ul>
	<li>Пункт №1</li>
	<li>Пункт №2</li>
</ul>
*/

