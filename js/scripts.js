function replacer(number, name){
  if(number || number === 0){
    if(number % 3 === 0){
      return "\"I'm sorry, "+name+". I'm afraid I can't do that.\"";
    }else if(number.toString().includes("1")){
      return "\"Boop!\"";
    }else if(number.toString().includes("0")){
      return "\"Beep!\"";
    }else{
      var numberToArray = number.toString().split("");
      var reversed = "";
      for( var i = numberToArray.length-1; i >= 0; i --){
        reversed += numberToArray[i];
      } return reversed;
    }
  }else{
    alert("Please enter a numeric value!")
  }
}

// function reverse(number){
//   var numberToArray = number.toString().split("");
//   var reversed = "";
//   for( var i = number.length-1; i >= 0; i --){
//     reversed += number[i];
//   } return reversed;
// }

$(document).ready(function() {

  $("form#form").submit(function(event) {
    event.preventDefault();
    var userName = $("input#name").val();
    var userInput = parseInt($("input#number").val());
    $("#result").append(replacer(userInput, userName)+ ", ");
    $(".output").show();
  });
 });
