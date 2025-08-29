function validateEmailAddress(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate(e) {
  e.preventDefault(); // evita recargar la página
  $("#result").text("");
  var emailaddress = $("#email").val();

  if (validateEmailAddress(emailaddress)) {
    $("#result").text(emailaddress + " es válido :)").css("color", "green");
  } else {
    $("#result").text(emailaddress + " no es correcto, por favor reintente :(").css("color", "red");
  }
}

$("#validate").on("click", validate);
