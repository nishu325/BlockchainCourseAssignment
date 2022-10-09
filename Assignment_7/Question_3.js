let a = "Hii Boy";
let b = "";
let ans = "";
for (let i = 0; i < a.length; i++) {
    if (a.charAt(i) == " ") {
        ans = b + " " + ans
        b = "";
    } else {
        b += a.charAt(i)
    }
}
ans = b + " " + ans
console.log(ans);