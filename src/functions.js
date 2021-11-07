function addToCart(quantity, productName = "Elma") {
    console.log("Sepete eklendi : Ürün: " + productName +
        " adet " + quantity)

}
addToCart(25)
addToCart("Yumurta")
addToCart("Karpuz")

let sayHello = () => {
    console.log("Hello Word!")
}
sayHello()
let sayHello2 = function() {
    console.log("HelloWorld2!")
}
sayHello2()

function addToCart2(ProductName, quantity, unitPrice) {

}
addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
let product1 = { productName: "Elma", unitPrice: 5, quantity: 10 }

function addToCart3(product) {
    console.log("Ürün: " + product.productName)
    console.log("Adet: " + product.quantity)
    console.log("Fiyat: " + product.unitPrice)
}

addToCart3(product1)
let product2 = { productName: "Elma", unitPrice: 5, quantity: 10 }
let product3 = { productName: "Elma", unitPrice: 5, quantity: 10 }
product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}
let products = [
    { productName: "Elma", unitPrice: 5, quantity: 10 },
    { productName: "Armut", unitPrice: 5, quantity: 10 },
    { productName: "Karpuz", unitPrice: 5, quantity: 10 }
]
addToCart4(products)

function add(a, ...numbers) { //rest operatoru
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        console.log([numbers[i]])
        total += numbers[i]
    }
    console.log(total)
    console.log(a)
}
add(20, 30, 50, 30, 20)
let numbers = [10, 20, 5, 6, 3]
console.log(Math.max(...numbers))

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    { name: "İç Anadolu", population: "20M" },
    { name: "Marmara", population: "30" },
    { name: "Karadeniz", population: "10M" },
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Trabzon", "sinop"],
    ]
]
console.log(icAnadolu.population)
console.log(icAnadolu.name)
console.log(marmara)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity = ({ productName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity } = { productName: "Elma", unitPrice: 10, quantity: 5 })

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)