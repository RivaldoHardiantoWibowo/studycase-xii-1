function positifnegatif(num) {
    if (num === 0) {
        return 'dilarang menginput bilangan 0'
    }
    else if (num > 0) {
        return `${num} ini bilangan positif`;
    } else if (num < 0) {
        return `${num} ini adalah bilangan negatif`;
    }
}

function genapganjil(num){
    if (num === 0) {
        return 'dilarang menginput bilangan 0'
    }
    else if (num % 2 === 0) {
        return `${num} ini adalah bilangan genap`;
    } else {
        return `${num} ini adalah bilangan ganjil`;
    }
}

let number = 20;
console.log(positifnegatif(number));
console.log(genapganjil(number));
