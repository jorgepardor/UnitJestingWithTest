// importar la función sum del archivo app.js
const { sum, oneEuroIs, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(oneEuroIs["USD"] * 3.5); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 127.9 yen", function(){
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(2)).toBe(oneEuroIs["JPY"] * 2); //1 dolar son 102.32 yenes, entonces 2 dolares deberian ser = (2 * 102.32)
})

test("One yen should be 0.00975 pounds", function(){
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(200)).toBe(oneEuroIs["GBP"] * 200); //1 yen son 0.00975 pounds, entonces 200 yenes deberian ser = (0.00975*200)
})