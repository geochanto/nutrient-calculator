$(document).ready(function () {
    var $recipeNameInput = $("input#recipeName");
    

    var $recipeNameInputEdit = $("input#recipeName-edit");
    

 

    $(document).on("click", "#submitRecipe", insertRecipe);
    $(document).on("click", ".deleteRecipe", deleteRecipe);
    $(document).on("click", ".editRecipe", editRecipe);

    function insertRecipe(event) {
        event.preventDefault();
        var recipes = {
            RecipeName: $recipeNameInput.val().trim(),
          
        };

        $.post("/recipes/new", recipes);

        $recipeNameInput.val("");
       
    }

    function deleteRecipe(event) {
        event.preventDefault();
        var id = $(this).attr('data-id');
        var name = $(this).attr('data-name');
        console.log(name);

        $('#recipeNameDelete').html(name);

        $(document).on("click", "#confirmDelete", confirmDelete);

        function confirmDelete() {
            $.ajax({
                url: '/recipes/delete/' + id,
                type: 'DELETE'
            });
        }
    }

    function editRecipe(event) {
        event.preventDefault();
        var id = $(this).attr('data-id');
        var name = $(this).attr('data-name');


        
        
        $('#recipeNameEdit').html(name);

        $(document).on("click", "#confirmRecipeEdit", confirmEdit);
        
        function confirmEdit() {
            console.log('recipe edit submitted...');
            var recipes = {
                RecipeName: $recipeNameInputEdit.val().trim(),
               
            };
            console.log(recipes);
            console.log(id);
            $.ajax({
                url: '/recipes/edit/' + id,
                type: 'PUT',
                data: recipes
            });
        }
    }

});