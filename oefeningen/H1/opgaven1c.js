let hoogte = 7;

for (let i = 0; i < hoogte; i++) {
    let spaties = ' '.repeat(hoogte - i - 1);
    let sterretjes = '#'.repeat(2 * i + 1);
    console.log(spaties + sterretjes);
}
