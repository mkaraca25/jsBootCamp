let kontrol1 = 0,
    kontrol2 = 0

function arkadasNumber(num1, num2) {
    for (let i = 1; i < num1; i++) {
        if (num1 % i == 0) {
            kontrol1 += i;
        }
    }
    for (let j = 1; j < num2; j++) {
        if (num2 % j == 0) {
            kontrol2 += j
        }

    }

    if (num1 == kontrol2 && num2 == kontrol1) {
        console.log("arkadaş sayıdır.")
    } else {
        console.log("arkadaş sayı değildir..")
    }
}

arkadasNumber(220, 284)