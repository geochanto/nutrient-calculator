// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

      $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
    
      var newRecipe = {
        RecipeName: $("#rpName").val().trim(),
        RecipeDescription: "ohno"
      };
   
      // Send the POST request.
      $.ajax("/recipes/new", {
        type: "POST",
        data: newRecipe
      }).then(
        function() {
          console.log("created new recipe");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });
  