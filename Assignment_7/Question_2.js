let a = "Hii Boy";
let b = "";
for (let i = 0; i < a.length; i++) {
    if (a.charAt(i) == " ") {
        b = b + ""
    } else {
        b += a.charAt(i)
    }
}
console.log(b);