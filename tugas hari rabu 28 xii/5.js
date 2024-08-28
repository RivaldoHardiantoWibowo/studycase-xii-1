const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pay1 = 100000;
const pay2 = 200000;
const pay3 = 300000;

function calculate_overtime_pay(hours) {
    if (hours < 6) {
        return `Anda mendapatkan gaji lembur sebesar ${pay1.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}`;
    } else if (hours === 6) {
        return `Anda mendapatkan gaji lembur sebesar ${pay2.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}`;
    } else {
        return `Anda mendapatkan gaji lembur sebesar ${pay3.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}`;
    }
}

rl.question('Masukkan jumlah jam lembur: ', (input) => {
    const hours = parseInt(input);
    console.log(calculate_overtime_pay(hours));
    rl.close();
});
