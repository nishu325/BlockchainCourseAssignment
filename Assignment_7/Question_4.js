let a = "apple";
let b = "";
for (let i = 0; i < a.length; i++) {
    if (a.charAt(i) == "a") {
        b += "x"
    } else {
        b += a.charAt(i)
    }
}
console.log(b);