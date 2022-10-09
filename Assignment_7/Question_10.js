let a = "i am a String";

// a
console.log(a.toUpperCase());

// b
let b = "";
if (a.charAt(0).toUpperCase() !== a.charAt(0)) {
    console.log(a.charAt(0).toUpperCase() + a.substring(1));
}

// c
console.log(a.toLowerCase());

// d
let c = Math.floor(a.length / 2);
let d = a.substring(0, 7)
let e = a.substring(7)
let f = e + " " + d
console.log(f);

// e
let count = 0;
let g = "";
for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a.charAt(i) === a.charAt(j)) {
            g = g + "|" + a.charAt(i)
            count++;
        }
    }
}
console.log(g + " " + count); // answer is taking spaces into consideration

// f
let h = "";
for (let i = a.length - 1; i >= 0; i--) {
    h += a.charAt(i)
}
console.log(h);