const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan angka pertama: ', (num1) => {
    rl.question('Masukkan angka kedua: ', (num2) => {
        rl.question('Masukkan angka ketiga: ', (num3) => {
            
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            num3 = parseInt(num3);

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

            let largestNumber = findLargestNumber(num1, num2, num3);
            console.log("Bilangan terbesar adalah: " + largestNumber);

            rl.close();
        });
    });
});
