function factorial(number) {
    if (number === 0) {
        return 1;
    }

    return number * factorial(number - 1); // het gegeven nummer in ln 8 word * zichzelf gedaan en dan -1 dan loopt hij tot het nummer 0 is
}
console.log(factorial(5));