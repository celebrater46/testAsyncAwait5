"use strict";

const asyncInPromise = async(msg) => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log("async in promise");
            resolve(msg + " Greeting from async in Promise!");
        }, 1000);
    });
}

// Promise の中から async() を呼びだす
const asyncReturnSomething = (msg) => {
    return new Promise(async(resolve, reject)=> {
        const newMsg = await asyncInPromise(msg);
        setTimeout(()=> {
            resolve(newMsg);
        }, 1000);
    });
}

const sayHello = async(name) => {
    return await asyncReturnSomething(`Hello! I'm ${name}!`)
}

const doAsync = async ()=> {
    const div = document.getElementById("test")
    const greeting1 = await sayHello("sally");
    div.innerHTML = "<p>" + greeting1 + "</p>";
    console.log(greeting1);
    const greeting2 = await sayHello("alma");
    div.innerHTML += "<p>" + greeting2 + "</p>";
    console.log(greeting2);
    const greeting3 = await sayHello("hideru");
    div.innerHTML += "<p>" + greeting3 + "</p>";
    console.log(greeting3);
    console.log('Done!');
};