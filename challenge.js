function findDigits(n) {
    return (''+n).split('').filter(num=>n%num===0).length;
}

findDigits(12, 1024) // 2, 3
