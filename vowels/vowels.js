const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function deleteVowels(text) {
  return text.replace(/[aeiouAEIOU]/g, '');
}

rl.question('Ingresa una frase: ', (answer) => {
  const response = deleteVowels(answer);
  console.log('Frase sin vocales:', response);
  rl.close();
});
