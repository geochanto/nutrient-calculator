$(document).ready(function () {

  $(document).on("click", ".deleteRecipe", deleteRecipe);
  // $(document).on("click", "#submitIngredient", insertIngredient);
  // $(document).on("click", ".editIngredient", editIngredient);


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
      }).then(location.reload());
    });
  
  });
  

  function deleteRecipe(event) {
    event.preventDefault();
    var id = $(this).attr('data-id');
    var name = $(this).attr('data-name');
    console.log(name);
    console.log(id);

    $('#RecipeNameDelete').html(name);

    $(document).on("click", "#confirmRecipeDelete", confirmRecipeDelete);

    function confirmRecipeDelete() {
        $.ajax({
            url: '/recipes/delete/' + id,
            type: 'DELETE'
          }).then(location.reload());
    }
}

});