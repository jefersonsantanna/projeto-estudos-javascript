const word = prompt("Report a word") 
let invertedWord = ""

       //inicialização    //condição  // incremento
for (let i = word.length - 1; i >= 0; i--) {
   invertedWord += word[i] 
}

if (word === invertedWord) {
   alert(word + " is a palindrome!")
} else {
  alert(
    word + " it's not a palindrome!\n\n" +
    word + " !== " + invertedWord
)
}