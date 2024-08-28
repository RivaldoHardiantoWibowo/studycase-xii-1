buku = int(input("Jumlah Buku: "))
harga = 5000
jumlah_lembar = buku * 10

if (jumlah_lembar <= 100):
    total = jumlah_lembar * harga
    print("totalnya adalah: ", total)
    
elif (jumlah_lembar <= 200):
    harga_pertama = 100 * 5000
    diskon_pertama = (harga_pertama * 5) / 100
    total_pertama = harga_pertama - diskon_pertama
    
    jml_buku_kedua = jumlah_lembar % 100
    harga_kedua = jml_buku_kedua * 5000
    diskon_kedua = (harga_kedua * 15) / 100
    total_kedua = harga_kedua - diskon_kedua
    
    total_seluruh = total_pertama + total_kedua
    print("Diskon 100 Lembar Pertama adalah: ", diskon_pertama)
    print("Diskon Sisa Lembar adalah : ", diskon_kedua)
    print("Total Belanjaan anda adalah : ", total_seluruh)

elif (jumlah_lembar > 200):
    harga_pertama = 100 * 5000
    diskon_pertama = (harga_pertama * 7) / 100
    total_pertama = harga_pertama - diskon_pertama
    
    harga_kedua = 100 * 5000
    diskon_kedua = (harga_kedua * 17) / 100
    total_kedua = harga_kedua - diskon_kedua
    
    jml_buku_ketiga = jumlah_lembar % 200
    harga_ketiga = jml_buku_ketiga * 5000
    diskon_ketiga = (harga_ketiga * 27) / 100
    total_ketiga = harga_ketiga - diskon_ketiga
    
    total_seluruh = total_pertama + total_kedua + total_ketiga
    
    print("Diskon 100 Lembar Pertama adalah : ", diskon_pertama)
    print("Diskon Pembelian 200 Lembar adalah : ", diskon_kedua)
    print("Diskon Sisa Lembar adalah : ", diskon_ketiga)
    print("Total Belanjaan anda adalah : ", total_seluruh)