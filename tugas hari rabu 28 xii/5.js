let pay1 = 100000
let pay2 = 200000
let pay3 = 300000

function calculate_overtime_pay(hours) {
    if (hours < 6) {
        return `anda mendapatkan gaji lembur sebesar ${pay1.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}`
    }else if(hours == 6) {
        return `anda mendapatkan gaji lembur sebesar ${pay2.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}`
    }else {
        return `anda mendapatkan gaji lembur sebesar ${pay3.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}`
    }
}

let hour = 7
console.log(calculate_overtime_pay(hour));
