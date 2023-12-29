const checkSpelling_typo = (md) => {
    var Typo = require("typo-js");
    var dictionary = new Typo('ru_RU');
    var spellingMistakes = [];
    let lines = md.split("\n");
    for (var il = 0; il < lines.length; il++) {
        let words = lines[il].split(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/);
        let Idx = 0;
        for (var word of words) {
            if (word != "") {
                if (!dictionary.check(word)) {
                    spellingMistakes.push({
                        range: {
                            line: il,
                            startIdx: Idx,
                            endIdx: Idx + word.length - 1
                        },
                        original: word,
                        advices: dictionary.suggest(word)
                    });
                }
            }
            Idx += word.length + 1;
        }
    }
    return spellingMistakes;
};
const md = `Очень, провильное преложение.\nВторая стрчка!`;
const spellingMistakes = checkSpelling_typo(md);
console.log(spellingMistakes);
//# sourceMappingURL=typo.js.map