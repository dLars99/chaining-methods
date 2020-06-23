const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

document.getElementById("answer").innerHTML = integers.filter(integer => {return integer <= 19} ).sort((a, b) => b - a).map(integer => {return integer * 1.5 - 1}).reduce((currentTotal, nextValue) => currentTotal += nextValue)