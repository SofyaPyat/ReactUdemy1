"use strict";

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs(plan) {
        res = `Мне ${plan.age} и я владею языками:`;
        let langs = plan.skills.languages;
        for (let i in langs) {
            res = res + " " + langs[i].toUpperCase();
            }
        return res;
    }
};


function showProgrammingLangs(plan) {
    let res = "";
    let langs = {};
    langs = plan.skills.programmingLangs;
    for (let key in langs) {
        res = res + `Язык ${key} изучен на ${langs[key]} `;
    }
    return res;
}

console.log(showProgrammingLangs(personalPlanPeter));


function showExperience(plan) {
    let exp = {};
    exp = plan.skills;
    return exp.exp;
}


function showProgrammingLangs(plan) {
    let res = "";
    for (let key in plan.skills.programmingLangs) {
        res = res + `Язык ${key} изучен на ${plan.skills.programmingLangs[key]} `;
    }
}


const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) == "string") {
    let arr = str.split("");
    const newArr = [];
    let j = 0;
    for (let i = arr.length - 1; i > 0; i--) {
        newArr[j++] = arr[i];
    }
    return newArr.join("");
    } else {
        return "Ошибка!";
    }
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length == 0) {
        return "Нет доступных валют";
    } else {
        let newArr = [];
        if (typeof(missingCurr) == "string") {
            misArr = missingCurr.split("\0");
            newArr = arr.filter(x => !missingCurr.includes(x));
        } else {
            newArr = [...arr];
        }
        let res = "Доступные валюты:\n";
        for (let i in newArr) {
            res = res + `${newArr[i]}\n`
        }
        return res
    }
}

console.log(availableCurr(['UAH', 'RUB', 'CNY'], 'CNY'));


