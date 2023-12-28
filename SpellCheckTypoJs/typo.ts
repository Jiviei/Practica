interface Range {
    line: number;
    startIdx: number;
    endIdx: number;
}
interface SpellingMistake {
    range: Range;
    original: string;
    advices: string[];
}
const checkSpelling_typo = (md: string): SpellingMistake[] => {
    var Typo = require("typo-js");
    var dictionary = new Typo('ru_RU');
    var spellingMistakes: SpellingMistake[] = [];
    let lines: string[] = md.split("\n");
    for (var il = 0; il < lines.length; il++) {
        let words: string[] = lines[il].split(" ");
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
}

const md = `Очень провильное преложение\nВторая стрчка`;

const spellingMistakes: SpellingMistake[] = checkSpelling_typo(md);
console.log(spellingMistakes)
