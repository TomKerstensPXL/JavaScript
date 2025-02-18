let aantalLijnen = 7;
for (i = 0; i < aantalLijnen + 1; i++) {
    for (j = aantalLijnen; j > 0; j--) {
        console.log(" ".repeat(j) + "#".repeat(i));
    }
}