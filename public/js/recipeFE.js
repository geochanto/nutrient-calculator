$(document).ready(function () {
  var $RecipeNameInput = $("input#RecipeName");
  var $RecipeDescriptionInput = $("input#RecipeDescription");

  $(document).on("click", ".deleteRecipe", deleteRecipe);
  $(document).on("click", "#submitRecipe", insertRecipe);
  // $(document).on("click", ".editIngredient", editIngredient);

  $(document).on("click", "#addRecipeIngredient", addRecipeIngredient);

  i = 1;

  function addRecipeIngredient () {
    console.log('clicked');
    i++;
    console.log(i);
    $("#RecipeIngredientGroup").append( `
    <div class="form-row">
    <div class="form-group col-md-3" >
    <label for="RecipeIngredient-${i}">Ingredient ${i}</label>
    <input type="text" class="form-control" id="RecipeIngredient-${i}" placeholder="Ingredient ${i}">
    </div>

    <div class="form-group col-md-3">
    <label for="AmountForSmall-${i}">Amount for Small </label>
    <input type="text" class="form-control" id="AmountForSmall-${i}" placeholder="Amount for Small">
  </div>

  <div class="form-group col-md-3">
    <label for="AmountForMedium-${i}">Amount for Medium </label>
    <input type="text" class="form-control" id="AmountForMedium-${i}" placeholder="Amount for Medium">
  </div>

  <div class="form-group col-md-3">
    <label for="AmountForLarge-${i}">Amount for Large </label>
    <input type="text" class="form-control" id="AmountForLarge-${i}" placeholder="Amount for Large">
  </div>
  </div>` );
  }
  
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