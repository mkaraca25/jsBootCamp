function asalSayi(limit) {
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        if (i == 2) {
            console.log(`${i} Asal Sayıdır.`)
            continue
        }
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break
            }
        }
        if (isPrime) {
            console.log(`${i} Asal Sayıdır.`)
        }
    }
}
asalSayi(1000)