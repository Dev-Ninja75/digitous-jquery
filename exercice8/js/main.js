$("button").click(function(){
    $("#text").toggle(displaySecretText, function() {
      console.log("Apparition message texte !");
    });
  });