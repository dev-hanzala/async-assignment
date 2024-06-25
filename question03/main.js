"use strict";
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched succesfully!"), 1000);
    });
}
;
fetchData().then((result) => console.log(result));
