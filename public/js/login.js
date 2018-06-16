// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {

    $("#submit").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      //console.log($(this).parents().siblings(".newburger").val().trim());
      var login = {
        username: "Ally",
        password: "1234"
      };
       console.log(newburger);
      // Send the POST request.
      // $.post("/api/burgers",newburger)
      $.ajax("/login", {
        type: "POST",
        data: login
      })
      .then(function(data) {
          console.log("log in");  
          // Reload the page to get the updated list
          location.reload();
        }
      );

    

    });

  }); 