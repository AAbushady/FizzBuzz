/*global console*/
/*jshint esversion:6*/

(function () {
    'use strict';

    const loopAmount = 100;

    for (let cnt = 1; cnt <= loopAmount; cnt++) {
        if (cnt % 3 === 0 && cnt % 5 === 0) {
            console.log("FizzBuzz");
        } else if (cnt % 3 === 0) {
            console.log("Fizz");
        } else if (cnt % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(cnt);
        }
    }
})();
