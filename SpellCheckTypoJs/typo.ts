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
        let words: string[] = lines[il].split(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/);
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
}

const md = `Очень, провильное преложение.\nВторая стрчка!`;

const spellingMistakes: SpellingMistake[] = checkSpelling_typo(md);
console.log(spellingMistakes)
