// Funksiya: Verilmiş sözdəki sait səslərin sayını tapır
function countVowels(word) {
    // Azərbaycan əlifbasında olan sait səslərin siyahısı
    const vowels = 'aeiouəöüAEIOUƏÖÜ';
    let count = 0;

    // Hər bir hərfi yoxlayır
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count++;
        }
    }

    // Sait səslərin sayını qaytarır
    return count;
}

// Nümunə istifadəsi
const word = "Salam Dünya";
const vowelCount = countVowels(word);
console.log("Sait Səslərin Sayı:", vowelCount);