const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkNumber(num) {
    if (num === 0) {
        return 'Dilarang menginput bilangan 0';
    }

    let result = '';

    if (num > 0) {
        result += `${num} adalah bilangan positif, `;
    } else {
        result += `${num} adalah bilangan negatif, `;
    }

    if (num % 2 === 0) {
        result += `dan ${num} adalah bilangan genap.`;
    } else {
        result += `dan ${num} adalah bilangan ganjil.`;
    }

    return result;
}

rl.question('Masukkan sebuah angka: ', (input) => {
    const number = parseInt(input);

    console.log(checkNumber(number));

    rl.close();
});
