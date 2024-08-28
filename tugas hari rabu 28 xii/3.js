const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function switch_lamp(int) {
    if (int == 0) {
        return 'turn off lamp';
    } else {
        return 'turn on lamp';
    }
}

rl.question('Masukkan 0 untuk mematikan lampu atau 1 untuk menyalakan lampu: ', (input) => {
    const key = parseInt(input);

    console.log(switch_lamp(key));

    rl.close();
});
