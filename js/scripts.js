// function translator(string){
//   var findVowel = string.match(/[aeiou]/gi);
//   // alert(vowel.slice(0,1)); //shows firs vowel in the word
//   var firstVowel = findVowel.slice(0,1); //we need this idk why
//   var vowel = string.indexOf(firstVowel); // returns -1 = never occurs, .search() - does same thing
//   if(vowel === 0){
//     return string.slice(1) + string.charAt(0) + "way";
//   }else if(string.charAt(0)==="q" && string.charAt(1)==="u"){
//     return string.slice(2) + string.charAt(0) + string.charAt(1) + "ay";
//   } else {
//     return string.slice(vowel) + string.slice(0,vowel) + "ay";
//   }
//
// }
function replacer(number){
  if(number % 3 === 0){
    alert("I'm sorry, Dave. I'm afraid I can't do that")
  }else if(number.toString().includes("1")){
    alert("Boop")
  }else{
    alert("Beep");
  }
}




$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    // var inputArray = userInput.split(" ");
    replacer(userInput);

  });
 });
