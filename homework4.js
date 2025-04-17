function checkProbabilityTheory(count) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < count; i++) {
        var rnd = Math.random();  // [0, 1)
        rnd *= 901;               // [0, 901)
        rnd = Math.floor(rnd);    // округлення донизу
        rnd += 100;               // [100, 1000]

        if (rnd % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    let evenPercent = (even / count) * 100;
    let oddPercent = (odd / count) * 100;
    let evenoddPercent = even / odd;

    console.log("Кількість згенерованих чисел: " + count);
    console.log("Парних чисел: " + even);
    console.log("Непарних чисел: " + odd);
    console.log("Відсоток парних: " + evenPercent + "%");
    console.log("Відсоток непарних: " + oddPercent + "%");
    console.log("Співвідношення непарних до парних: " + evenoddPercent);

}
