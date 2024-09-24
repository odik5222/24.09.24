let name = "Alex"
let money = 10000
let account = 7777

let inputName = prompt("Как вас зовут?");
let inputAccount = prompt("Номер счета?");

if (inputName === name && inputAccount == account) {
    alert(`Привет, ${name}! Ваш баланс: ${money}`);
} else if (inputName === name) {
    alert("Пользователь не найден, доступ запрещен.");
} else if (inputAccount == account) {
    alert("Неправильный номер счета.");
}
