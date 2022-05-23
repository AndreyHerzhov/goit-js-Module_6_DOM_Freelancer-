// ------------------------ DOM ----------------- //

// ------ Навигация по DOM ------------ //

/*
 * Самые верхние элементы дерева
 * доступны как свойства обьекта document
 */ 

// const htmlElement = document.documentElement
// const headElement = document.head
// const bodyElement = document.body

// console.log(htmlElement)
// console.log(headElement)
// console.log(bodyElement)

// Получаем объект body
const bodyElement = document.body
// // Первый и последний дочерние элементы 
// const firstChildNode = bodyElement.firstChild
// const lastChildNode = bodyElement.lastChild

// console.log(firstChildNode)
// console.log(lastChildNode)

/*
 * В документе, возможено, есть ещё «какой-то HTML-код»,
 * но на момент выполнения скрипта браузер ещё
 * до него не дошёл.
 * Поэтому следует размещать скрипт в самом конце
 * документа
 */




// -------------- ChildNodes --------------------- //

/*
 * Коллекция childNodes содержит список всех детей, 
 * включая текстовые узлы.
 */

const childNodes = bodyElement.childNodes
console.log(childNodes)


/*
 * Для проверки наличия дочерних узлов 
 * существует также специальная функция hasChildNodes()
 */

// console.log(bodyElement.hasChildNodes()) // true

 

/*
 * Как мы уже видели,
 * childNodes похож на массив. На самом деле это не массив,
 * а коллекция – особый перебираемый объект - псевдомассив.
 */

/* 
 *   Отличия от массивов:
 *   1.Для перебора коллекции мы можем использовать for..of:
 *   2.Методы массивов не будут работать, потому что
 *   коллекция – это не массив
 */

// for (const node of childNodes) {
//     console.log(node)
// }

// "Живые" коллекции
/*
 *  Почти все DOM-коллекции, за небольшим исключением, "живые".
 *  Другими словами, они отражают текущее состояние DOM.
 *  Если мы сохраним ссылку на body.childNodes и добавим/удалим
 *  узлы в DOM, то они появятся в сохранённой коллекции автоматически.
 *  Еще вернемся к этому позже.
 */

//Только для чтения
/*
*    DOM-коллекции, и даже более – все навигационные свойства,
*    перечисленные далее, доступны только для чтения.
*    Мы не можем заменить один дочерний узел на другой,
*    просто написав childNodes[i] = ....
*    Для изменения DOM требуются другие методы.
*/
//------------------------------------------


// Соседние и родительский узлы

// const previousSibling = bodyElement.previousSibling
// const nextSibling = bodyElement.nextSibling
// const parentNode = bodyElement.parentNode

// console.log(previousSibling)
// console.log(nextSibling)
// console.log(parentNode)

//------------------------------------------

/*
Навигационные свойства, описанные выше, относятся
ко всем узлам в документе.
В частности, в childNodes находятся и текстовые узлы и
узлы-элементы и узлы-комментарии, если они есть.
*/

/*
 *   Но для большинства задач текстовые узлы и
 *   узлы-комментарии нам не нужны. Мы хотим манипулировать
 *   узлами-элементами, которые представляют собой теги и
 *   формируют структуру страницы.
 */

// Получаем коллекцию всех дочерних элементов
const bodyChildren = bodyElement.children
// console.log(bodyChildren)

// Первый и последний дочерние элементы
// const firstChild = bodyElement.firstElementChild
// const lastChild = bodyElement.lastElementChild
// console.log(firstChild)
// console.log(lastChild)

// Соседние и родительский элементы

const previousSibling = bodyElement.previousElementSibling
const nextSibling = bodyElement.nextElementSibling
const parentElement = bodyElement.parentElement

console.log(previousSibling)
console.log(nextSibling)
console.log(parentElement)

