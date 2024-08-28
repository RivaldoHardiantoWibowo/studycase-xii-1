function findLargestNumber(a, b, c) {
    let largest;

    if (a > b && a > c) {
        largest = a;
    } else if (b > a && b > c) {
        largest = b;
    } else {
        largest = c;
    }

    return largest;
}

let num1 = 10;
let num2 = 25;
let num3 = 15;

let largestNumber = findLargestNumber(num1, num2, num3);
console.log("Bilangan terbesar adalah: " + largestNumber);
