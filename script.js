let arr = [12, -5, 7, 9, -3, 6, 15, -10, 8];
function filterNumbers(arr) {
    let positiveOdds = []; // Musbat va toq sonlar
    let remainingOdds = []; // Qolgan toq sonlar

    arr.forEach(n => {
        if (n > 0 && n % 2 !== 0) {
            positiveOdds.push(n);
        } else if (n % 2 !== 0) {
            remainingOdds.push(n);
        }
    });

    return { positiveOdds, remainingOdds };
}

// Test

// let result = filterNumbers(numbers);

console.log('Musbat toq sonlar:', result.positiveOdds);  // [7, 9, 15]
console.log('Qolgan toq sonlar:', result.remainingOdds); // [-5, -3]
