function RNA(dna) {
    // Create a mapping of DNA to RNA complements
    const dnaToRnaMap = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    };
    
    // Convert each DNA nucleotide to its RNA complement
    return dna.split('').map(nucleotide => dnaToRnaMap[nucleotide] || '').join('');
}

function DNA(rna) {
    // Create a mapping of RNA to DNA complements
    const rnaToDnaMap = {
        'C': 'G',
        'G': 'C',
        'A': 'T',
        'U': 'A'
    };
    
    // Convert each RNA nucleotide to its DNA complement
    return rna.split('').map(nucleotide => rnaToDnaMap[nucleotide] || '').join('');
}
