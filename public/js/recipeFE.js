$(document).ready(function () {
  var $RecipeNameInput = $("input#RecipeName");
  var $RecipeDescriptionInput = $("input#RecipeDescription");

  $(document).on("click", ".deleteRecipe", deleteRecipe);
  $(document).on("click", "#submitRecipe", insertRecipe);
  // $(document).on("click", ".editIngredient", editIngredient);


// Make sure we wait to attach our handlers until the DOM is fully loaded.
function insertRecipe(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
    
      var recipe = {
        RecipeName: $RecipeNameInput.val().trim(),
        RecipeDescription: $RecipeDescriptionInput.val().trim()
      };
   
      // Send the POST request.
      $.ajax("/recipes/new", {
        type: "POST",
        data: recipe
      }).then(location.reload());
  
  }
  

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