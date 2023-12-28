const checkSpelling_typo = (md) => {
    var Typo = require("typo-js");
    var dictionary = new Typo('ru_RU');
    var spellingMistakes = [];
    let lines = md.split("\n");
    for (var il = 0; il < lines.length; il++) {
        let words = lines[il].split(" ");
        let Idx = 0;
        for (var iw = 0; iw < words.length; iw++) {
            if (!dictionary.check(words[iw])) {
                spellingMistakes.push({
                    range: {
                        line: il,
                        startIdx: Idx,
                        endIdx: Idx + words[iw].length - 1
                    },
                    original: words[iw],
                    advices: dictionary.suggest(words[iw])
                });
            }
            Idx += words[iw].length + 1;
        }
    }
    return spellingMistakes;
};
const md = `Очень провильное преложение\nВторая стрчка`;
const spellingMistakes = checkSpelling_typo(md);
console.log(spellingMistakes);
//# sourceMappingURL=typo.js.map