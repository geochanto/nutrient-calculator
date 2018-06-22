$(document).ready(function () {
  var $RecipeNameInput = $("input#RecipeName");
  var $RecipeDescriptionInput = $("input#RecipeDescription");
  var $RecipeTypeInput = $("input#RecipeType");

  $(document).on("click", ".deleteRecipe", deleteRecipe);
  $(document).on("click", "#submitRecipe", insertRecipe);
  // $(document).on("click", ".editIngredient", editIngredient);

  $(document).on("click", "#addRecipeIngredient", addRecipeIngredient);

  // $(document).on("change", "select", doSelect);

  // function doSelect() {
  //   alert('clicked!');
  //   $("select option:selected").hide;
  //   // $(this).attr('selected');
  //   // var IngredientId = $(this).attr('data-id');
  // }

  function selectID() {
  $(document).on( "select" )
  .change(function() {
    $( "select option:selected" ).each(function() {
      var selectedId = $(this).attr("data-id");
      
    });
    
  })
  .trigger( "change" ); 
}

  var i = 1;
  function addRecipeIngredient () {
    i++;
  //   $("#RecipeIngredientGroup").append( `
  //   <div class="form-row">
  //   <div class="form-group col-md-3 ingredientCol" >
  //   <label for="RecipeIngredient-${i}">Ingredient ${i}</label>
  //   <input type="text" class="form-control" id="RecipeIngredient-${i}" placeholder="">
  //   </div>

  //   <div class="form-group col-md-3 AmountForSmallCol">
  //   <label for="AmountForSmall-${i}">Amount for Small </label>
  //   <input type="text" class="form-control" id="AmountForSmall-${i}" placeholder="">
  // </div>

  // <div class="form-group col-md-3 AmountForMediumCol">
  //   <label for="AmountForMedium-${i}">Amount for Medium </label>
  //   <input type="text" class="form-control" id="AmountForMedium-${i}" placeholder="">
  // </div>

  // <div class="form-group col-md-3 AmountForLargeCol">
  //   <label for="AmountForLarge-${i}">Amount for Large </label>
  //   <input type="text" class="form-control" id="AmountForLarge-${i}" placeholder="">
  // </div>
  // </div>` );
  $( "#RecipeIngredientGroup .form-row:first-child" ).clone().appendTo( "#RecipeIngredientGroup" );

  }
  
// Make sure we wait to attach our handlers until the DOM is fully loaded.
function insertRecipe(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      RecipeIngredientsInputs = [];
      $('#RecipeIngredientGroup .form-row').each(function() {

        selectID(execute);

        
        function execute() {
        var inputs = {
          // IngredientId:$(this).find('.ingredientCol select option:selected').attr('data-id'),
          IngredientId: selectedId,
          AmountForSmall: $(this).find('.AmountForSmallCol input').val().trim(),
          AmountForMedium: $(this).find('.AmountForMediumCol input').val().trim(),
          AmountForLarge: $(this).find('.AmountForLargeCol input').val().trim()
        }
        RecipeIngredientsInputs.push(inputs);
      }

      });
      var recipe = {
        RecipeName: $RecipeNameInput.val().trim(),
        RecipeDescription: $RecipeDescriptionInput.val().trim(),
        RecipeType: $RecipeTypeInput.val().trim(),
        RecipeIngredients: RecipeIngredientsInputs
      };

      console.log(recipe);
   
      // Send the POST request.
      $.ajax("/recipes/new", {
        type: "POST",
        data: recipe
      });
  
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