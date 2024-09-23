var name = "Ghous   Ahmed";

for (var i = 0; i < name.length; i++) {
  if (name.slice(i, i + 3) === "   ") {
    console.log("No Double Space!");
    break;
  }
}

var str = "ghous ahmed";
var g = str[0].toUpperCase();
var result1 = g + str.slice(1, 6);
var a = str.slice(6, 7).toUpperCase();
var result2 = a + str.slice(7);
console.log(result1 + result2);
