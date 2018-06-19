$(document).ready(function () {
    var $ingredientNameInput = $("input#ingredientName");
    var $CaloriesInput = $("input#Calories");
    var $CarbsInput = $("input#Carbs");
    var $SugarInput = $("input#Sugar");
    var $FatInput = $("input#Fat");
    var $ProteinInput = $("input#Protein");
    var $isGlutenFreeInput = $("input#isGlutenFree");
    var $isNutInput = $("input#isNut");
    var $isGMOInput = $("input#isGMO");

    $('input[type="checkbox"]').change(function(){
        this.value ^= 1;
    });

    $(document).on("click", "#submit", insertIngredient);

    function insertIngredient(event) {
        console.log('CLICKED!');
        event.preventDefault();
        var ingredient = {
            ingredientName: $ingredientNameInput.val().trim(),
            Calories: $CaloriesInput.val().trim(),
            Carbs: $CarbsInput.val().trim(),
            Sugar: $SugarInput.val().trim(),
            Fat: $FatInput.val().trim(),
            Protein: $ProteinInput.val().trim(),
            isGlutenFree: $isGlutenFreeInput.val().trim(),
            isNut: $isNutInput.val().trim(),
            isGMO: $isGMOInput.val().trim()
        };
        console.log('ingredient: '+ingredient.isNut);

        $.post("/ingredients/new", ingredient);

        $ingredientNameInput.val("");
        $isGlutenFreeInput.val("");
        $isNutInput.val("");
        $isGMOInput.val("");
        $CaloriesInput.val("");
        $CarbsInput.val("");
        $SugarInput.val("");
        $FatInput.val("");
        $ProteinInput.val("");
    }

});