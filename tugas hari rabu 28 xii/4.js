function discount(price1, price2, price3) {
    let total_price = price1 + price2 + price3
    let discount
    let final_price
    if (total_price >100000) {
        discount =+ total_price * 0.1
        final_price =+ total_price - discount
        return `anda mendapatkan diskon sebesar 10% jadi anda hanya membayar Rp.${final_price}`
    } else {
        return `anda harus membayar sebesar : Rp.${total_price}`
    }
}
let price1 = 40000
let price2 = 40000
let price3 = 20000

console.log(discount(price1, price2, price3));