//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (string = "") => {
  const codonMap = {
    "AUG": "Methionine",
    "UUU": "Phenylalanine",
    "UUC": "Phenylalanine",
    "UUA": "Leucine",
    "UUG": "Leucine",
    "UCU": "Serine",
    "UCC": "Serine",
    "UCA": "Serine",
    "UCG": "Serine",
    "UAU": "Tyrosine",
    "UAC": "Tyrosine",
    "UGU": "Cysteine",
    "UGC": "Cysteine",
    "UGG": "Tryptophan",
    "UAA": "STOP",
    "UAG": "STOP",
    "UGA": "STOP"
  };
  const mappedProteins = [];

  if (string.length > 0 ) {
    for (var i = 0; i < (string.length); i += 3) {
      const codon = string.slice(i, i + 3);
      console.log(`Codon: ${codon} ${i}`)
      if (codonMap[codon] === "STOP") {
        i = string.length
        return mappedProteins;
      }

      mappedProteins.push(codonMap[codon]);
    }
  }

  return mappedProteins;
};
