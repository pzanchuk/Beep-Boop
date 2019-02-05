function replacer(number, name){
  if(number % 3 === 0){
    if(number === 0){
      return "\"Beep!\"";
    }else{
      return "\"I'm sorry, "+name+". I'm afraid I can't do that.\"";
    }
  }else if(number.toString().includes("1")){
    return "\"Boop!\"";
  }else if(number.toString().includes("0")){
    return "\"Beep!\"";
  }else{
    return number;
  }

}

$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var userName = $("input#name").val();
    var userInput = parseInt($("input#number").val());
    if(!isNaN(userInput)){
      for(var i = 0; i <= userInput; i++){
        $("#result").append(replacer(i, userName)+ " ");
      }
    }else{
      alert("NOT a number")
    }
    $(".output").show();
  });
 });
