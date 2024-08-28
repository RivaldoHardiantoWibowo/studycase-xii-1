function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

// Loop untuk memeriksa tahun dari 1600 hingga 2024
for (let year = 1600; year <= 2024; year+=4) {
    if (isLeapYear(year)) {
        console.log(`${year} adalah tahun kabisat.`);
    } else {
        console.log(`${year} bukan tahun kabisat.`);
    }
}
