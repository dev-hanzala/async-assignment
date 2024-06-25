"use strict";
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched succesfully!"), 1000);
    });
}
;
function processData() {
    return new Promise((resolve, reject) => {
        resolve("Data processed succesfully!");
    });
}
;
function executeSequentially() {
    let promise = new Promise((resolve, reject) => {
        fetchData().then((result) => resolve(result));
    });
    promise.then((result) => console.log(result)).finally(() => {
        processData().then((result) => console.log(result));
    });
}
executeSequentially();
