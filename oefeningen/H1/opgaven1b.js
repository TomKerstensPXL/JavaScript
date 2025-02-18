let hoogte = 6;

for (let i = 1; i <= hoogte; i++) {
    let spaties = ' '.repeat(hoogte - i);
    let sterretjes = '#'.repeat(i);
    console.log(spaties + sterretjes);
}
