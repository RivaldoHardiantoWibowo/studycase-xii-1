function statusMegathurst(depth){
    if (depth <= 500.0) {
        return 'kondisi aman boskuhhh'
    } else if(depth > 500.1 && depth <= 600.0){
        return 'harus waspada ya brooo'
    } else if(depth > 600.1 && depth <= 650.0){
        return 'siaga bang broo takut kenapa napa'
    } else {
        return 'broooooo siaga1 siaga1'
    }
}

let tinggi_air = 700.3
console.log(statusMegathurst(tinggi_air));
