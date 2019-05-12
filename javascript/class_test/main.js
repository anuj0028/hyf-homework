// 1. (Main theme: Programming Basics)
function numbers(){
var points = new Array(100);
        for (var i = 0; i < 100; i++) {
            points[i] = i + 1; 
        }

        for (var i = 0; i < points.length; i++) {
            console.log(points[i]); }
        }
numbers();

let output = [];
for(let i = 0; i <= 100; i++) {
   if(i % 3 == 0 && i % 5 == 0) {
      output += i + "Jackpot!";
   } else if(i % 3 == 0) { 
      output += i + "This is divisible by 3";
   } else if(i % 5 == 0) {
      output += i + "This is divisible by 5";
   }
}
console.log(output)


// 2. (Main theme: DOM manipulation)
var button = document.createElement("button");
button.innerHTML = "Do Something";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function() {
  alert("did something");
});

// 3. (Main theme: Async API calls)
