function replacer(number){
  if(number){
    if(number % 3 === 0){
      return "I'm sorry, Dave. I'm afraid I can't do that";
    }else if(number.toString().includes("1")){
      return "Boop!";
    }else if(number.toString().includes("0")){
      return "Beep!";
    }else{
      return number;
    }
  }else{
    alert("Please enter a numeric value")
  }
}


$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    $("#result").append(replacer(userInput)+ ", ");
    ;

  });
 });
