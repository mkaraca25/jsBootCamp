function asalMi(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let isPrime = true
        if (numbers[i] <= 1) {
            console.log(`${numbers[i]} Asal Değildir`)
            continue
        }
        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i] % j == 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            console.log(`${numbers[i]} Asal Sayıdır.`)
        } else {
            console.log(`${numbers[i]} Asal Değildir.`)
        }
    }
}