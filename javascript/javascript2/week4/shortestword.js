const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
function shortestWord() {
console.log (
    danishWords.reduce(function (a, b) {
        return a.length <= b.length ? a : b;
    })
)
}
shortestWord();
