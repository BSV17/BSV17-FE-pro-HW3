const numberWarning = "Вы ввели некорректные данные. Повторите попытку используя цифры (только арабские, с римскими не будет работать)";

const numberA = +prompt("Введите чило A");
if (numberA !== 0 && Number.isNaN(numberA) === false) {
    const numberB = +prompt("Введите чило B");
    if (numberB !== 0 && Number.isNaN(numberB) === false) {
        console.log("Число A = " + numberA + ". Число B = " + numberB);
        if (numberA > numberB) {
            console.log("A больше B");
        } else if (numberA < numberB) {
            console.log("A меньше B");
        } else {
            console.log("A равно B");
        }
    } else {
        alert(numberWarning);
    }
} else {
    alert(numberWarning);
}

const numberC = +prompt("Введите число");
if (numberC !== 0 && Number.isNaN(numberC) === false) {
    const isEvenNumberC = numberC % 2 === 0;
    if (isEvenNumberC) {
        console.log("Число " + numberC + " четное");
    } else {
        console.log("Число " + numberC + " нечетное");
    }
    const lastNumber = numberC % 10;
    console.log("Последняя цифра: " + lastNumber);
} else {
    alert(numberWarning);
}

const userName = prompt("Введите свое имя");
if (userName !== null) {
    const userAge = +prompt("Введите свой возраст");
    if (userAge !== 0 && Number.isNaN(userAge) === false) {
        const alcohol = confirm("Алкоголь употребляем?");
        if (alcohol) {
            if (userAge > 40) {
                console.log(userName + ", не злоупотребляйте");
            } else if (userAge < 18) {
                console.log(userName + ", ты что?! Маме расскажу!");
            } else {
                console.log(userName + ", только водку с пивом не мешай...");
            }
        } else {
            console.log(userName + ", так держать!");
        }
    } else {
        alert(numberWarning);
    }
} else {
    alert("Вы не ввели имя");
}
