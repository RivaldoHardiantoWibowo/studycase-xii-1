const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function formatToRupiah(number) {
    return number.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}

function discount(price1, price2, price3) {
    let total_price = price1 + price2 + price3;
    let discount = 0;
    let final_price = total_price;

    if (total_price > 100000) {
        discount = total_price * 0.1;
        final_price = total_price - discount;
        return `Anda mendapatkan diskon sebesar 10% jadi Anda hanya membayar ${formatToRupiah(final_price)}`;
    } else {
        return `Anda harus membayar sebesar: ${formatToRupiah(total_price)}`;
    }
}

rl.question('Masukkan harga pertama: Rp.', (input1) => {
    rl.question('Masukkan harga kedua: Rp.', (input2) => {
        rl.question('Masukkan harga ketiga: Rp.', (input3) => {
            const price1 = parseInt(input1);
            const price2 = parseInt(input2);
            const price3 = parseInt(input3);

            console.log(discount(price1, price2, price3));

            rl.close();
        });
    });
});
