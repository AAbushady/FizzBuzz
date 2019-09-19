/*
Write a program that uses console.log to pring all the numbers from 1 to 100, 
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When that is working, modify to print "FizzBuzz" for numbers that are divisible by
both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only those).
*/

const loopAmount = 100;

for(cnt = 1; cnt <= loopAmount; cnt ++) {
    if (cnt % 3 == 0) {
        console.log("Fizz");
    } else if (cnt % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(cnt);
    }
}