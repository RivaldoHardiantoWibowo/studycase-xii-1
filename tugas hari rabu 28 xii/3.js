function switch_lamp(int) {
    if (int == 0) {
        return 'turn off lamp'
    } else{
        return 'turn on lamp'
    }
}

let key = 1
console.log(switch_lamp(key));