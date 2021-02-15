#!/usr/bin/node

function welcomeMessage(fullName) {
    return function closure(name) {
        alert(`Welcome ${fullName}`);
    };
}

let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");
