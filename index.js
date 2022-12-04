// let number1 : number
// let number2 : number
var entry = "hello";
window.addEventListener('keyup', function (e) {
    console.log(e.key);
    // if(parseInt(e.key) !== NaN){
    entry = entry + e.key.toString();
    // }
});
var submitBtn = document.getElementById("submit");

submitBtn.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(entry);
});
