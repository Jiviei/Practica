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
const getPartsOfContent = (md, spellingMistakes) => {
    var partOfContent = [];
    let lines = md.split("\n");
    let start = 0;
    let line = 0;
    for (var spellingMistake of spellingMistakes) {
        if (line != spellingMistake.range.line) {
            if (spellingMistake.range.startIdx == 0) {
                continue;
            }
            else {
                partOfContent.push({
                    content: lines[line].substring(start) + "\n" + lines[++line].substring(0, spellingMistake.range.startIdx)
                });
            }
        }
        else
            partOfContent.push({
                content: lines[line].substring(start, spellingMistake.range.startIdx)
            });
        start = spellingMistake.range.endIdx + 1;
        partOfContent.push({
            content: spellingMistake.original,
            advices: spellingMistake.advices
        });
    }
    return partOfContent;
};
const md = `Очень, провильное преложение.\nВторая стрчка!`;
const spellingMistakes = checkSpelling_typo(md);
const partsOfContent = getPartsOfContent(md, spellingMistakes);
console.log(partsOfContent);
//# sourceMappingURL=typo.js.map