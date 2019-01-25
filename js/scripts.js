function replacer(number, name){
  if(number){
    if(number % 3 === 0){
      return "\"I'm sorry, "+name+". I'm afraid I can't do that.\"";
    }else if(number.toString().includes("1")){
      return "\"Boop!\"";
    }else if(number.toString().includes("0")){
      return "\"Beep!\"";
    }else{
      return number;
    }
  }else{
    alert("Please enter a numeric value!")
  }
}


$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var userName = $("input#name").val();
    var userInput = parseInt($("input#number").val());
    $("#result").append(replacer(userInput, userName)+ ", ");
    ;

  });
 });
