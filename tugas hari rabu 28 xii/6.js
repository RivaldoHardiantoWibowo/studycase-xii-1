const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function statusMegathurst(depth) {
    if (depth <= 500.0) {
        return 'Kondisi aman boskuhhh';
    } else if (depth > 500.1 && depth <= 600.0) {
        return 'Harus waspada ya brooo';
    } else if (depth > 600.1 && depth <= 650.0) {
        return 'Siaga bang broo takut kenapa napa';
    } else {
        return 'Broooooo siaga1 siaga1';
    }
}

rl.question('Masukkan kedalaman air: ', (input) => {
    const depth = parseFloat(input);
    console.log(statusMegathurst(depth));
    rl.close();
});
