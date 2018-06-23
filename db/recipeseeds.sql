-- All Recipes List
INSERT INTO Recipes (RecipeName, RecipeDescription, RecipeImage, createdAt, updatedAt) VALUES ('Chocolate Banana Smoothie', 'health drink and taste good', '../img/img1.jpg', '2018-06-21 06:05:48', '2018-06-21 06:05:50');

INSERT INTO Recipes (RecipeName, RecipeDescription, RecipeImage, createdAt, updatedAt) VALUES ('Mango Madness', 'mango is good for health', '../img/img2.jpg', '2018-06-21 06:05:48', '2018-06-21 06:05:50');

INSERT INTO Recipes (RecipeName, RecipeDescription, RecipeImage, createdAt, updatedAt) VALUES ('Strawberry Soother', 'best Strawberry Ever!', '../img/img3.jpg', '2018-06-21 06:05:48', '2018-06-21 06:05:50');


INSERT INTO Recipes (RecipeName, RecipeDescription, RecipeImage, createdAt, updatedAt) VALUES ('The Citrus Tingler', 'best Strawberry Ever!', '../img/img4.jpg', '2018-06-21 06:05:48', '2018-06-21 06:05:50');


INSERT INTO Recipes (RecipeName, RecipeDescription, RecipeImage, createdAt, updatedAt) VALUES ('Hawaiian Summer', 'summer is here!', '../img/img5.jpg', '2018-06-21 06:05:48', '2018-06-21 06:05:50');

INSERT INTO Recipes (RecipeName, RecipeDescription, RecipeImage, createdAt, updatedAt) VALUES ('Tropical Calm', 'calm down!', '../img/img6.jpg', '2018-06-21 06:05:48', '2018-06-21 06:05:50');




-- All Ingredients
INSERT INTO Ingredients (IngredientName, isGlutenFree, isNut, isGMO, Calories, Carbs, Sugar, Fat, Protein, createdAt, updatedAt) VALUES ('banana', '1', '0', '0', '100', '20', '10', '9', '6', '2018-06-21 06:05:48', '2018-06-21 06:05:50');

INSERT INTO Ingredients (IngredientName, isGlutenFree, isNut, isGMO, Calories, Carbs, Sugar, Fat, Protein, createdAt, updatedAt) VALUES ('chocalate', '1', '0', '0', '300', '10', '6', '9', '6','2018-06-21 06:05:48', '2018-06-21 06:05:50');

INSERT INTO Ingredients(IngredientName, isGlutenFree, isNut, isGMO, Calories, Carbs, Sugar, Fat, Protein, createdAt, updatedAt) VALUES ('mango', '1', '0', '0', '100', '20', '10','9', '6','2018-06-21 06:05:48', '2018-06-21 06:05:50');


INSERT INTO Ingredients (IngredientName, isGlutenFree, isNut, isGMO, Calories, Carbs, Sugar, Fat, Protein, createdAt, updatedAt) VALUES ('apple', '1', '0', '0', '200', '10', '6','9', '6', '2018-06-21 06:05:48', '2018-06-21 06:05:50');

INSERT INTO Ingredients (IngredientName, isGlutenFree, isNut, isGMO, Calories, Carbs, Sugar, Fat, Protein, createdAt, updatedAt) VALUES ('orange', '1', '0', '0', '120', '10', '6','9', '6', '2018-06-21 06:05:48', '2018-06-21 06:05:50');

INSERT INTO Ingredients (IngredientName, isGlutenFree, isNut, isGMO, Calories, Carbs, Sugar, Fat, Protein, createdAt, updatedAt) VALUES ('Strawberry', '1', '0', '0', '150', '10', '6','9', '6', '2018-06-21 06:05:48', '2018-06-21 06:05:50');

INSERT INTO Ingredients (IngredientName, isGlutenFree, isNut, isGMO, Calories, Carbs, Sugar, Fat, Protein, createdAt, updatedAt) VALUES ('Pineapple', '1', '0', '0', '220', '10', '6', '9', '6','2018-06-21 06:05:48', '2018-06-21 06:05:50');



-- Chocolate Banana Smoothie
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('1', 'sm', 'Classic Smoothies','2018-06-21 06:05:48', '2018-06-21 06:05:50', '1', '1');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('3', 'sm', 'Classic Smoothies', '2018-06-21 06:05:48', '2018-06-21 06:05:50','2', '1');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('2', 'md', 'Classic Smoothies','2018-06-21 06:05:48', '2018-06-21 06:05:50', '1', '1');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('6', 'md', 'Classic Smoothies', '2018-06-21 06:05:48', '2018-06-21 06:05:50','2', '1');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('3', 'lg', 'Classic Smoothies', '2018-06-21 06:05:48', '2018-06-21 06:05:50', '1', '1');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('9', 'lg', 'Classic Smoothies', '2018-06-21 06:05:48', '2018-06-21 06:05:50', '2', '1');


-- Mango Madness
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('1', 'sm', 'Classic Smoothies', '2018-06-21 06:05:48', '2018-06-21 06:05:50', '1', '2');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('1', 'sm', 'Classic Smoothies', '2018-06-21 06:05:48', '2018-06-21 06:05:50', '3', '2');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('2', 'md', 'Classic Smoothies', '2018-06-21 06:05:48', '2018-06-21 06:05:50', '1', '2');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('2', 'md', 'Classic Smoothies', '2018-06-21 06:05:48', '2018-06-21 06:05:50', '3', '2');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('3', 'lg', 'Classic Smoothies','2018-06-21 06:05:48', '2018-06-21 06:05:50',  '1', '2');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('3', 'lg', 'Classic Smoothies', '2018-06-21 06:05:48', '2018-06-21 06:05:50', '3', '2');


-- Strawberry Soother
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('1', 'sm', 'Classic Smoothies', '2018-06-21 06:05:48', '2018-06-21 06:05:50', '1', '3');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('2', 'sm', 'Classic Smoothies', '2018-06-21 06:05:48', '2018-06-21 06:05:50', '6', '3');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('1', 'sm', 'Classic Smoothies','2018-06-21 06:05:48', '2018-06-21 06:05:50',  '4', '3');

INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('2', 'md', 'Classic Smoothies','2018-06-21 06:05:48', '2018-06-21 06:05:50',  '1', '3');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('4', 'md', 'Classic Smoothies','2018-06-21 06:05:48', '2018-06-21 06:05:50',  '6', '3');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('2', 'md', 'Classic Smoothies', '2018-06-21 06:05:48', '2018-06-21 06:05:50', '4', '3');

INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('3', 'lg', 'Classic Smoothies','2018-06-21 06:05:48', '2018-06-21 06:05:50', '1', '3');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('6', 'lg', 'Classic Smoothies', '2018-06-21 06:05:48', '2018-06-21 06:05:50', '6', '3');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('3', 'lg', 'Classic Smoothies', '2018-06-21 06:05:48', '2018-06-21 06:05:50', '4', '3');


-- The Citrus Tingler
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('1', 'sm', 'Classic Smoothies', '2018-06-21 06:05:48', '2018-06-21 06:05:50', '6', '4');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('1', 'sm', 'Classic Smoothies', '2018-06-21 06:05:48', '2018-06-21 06:05:50', '7', '4');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('2', 'sm', 'Classic Smoothies', '2018-06-21 06:05:48', '2018-06-21 06:05:50', '5', '4');

INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('2', 'md', 'Classic Smoothies', '2018-06-21 06:05:48', '2018-06-21 06:05:50', '6', '4');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('2', 'md', 'Classic Smoothies', '2018-06-21 06:05:48', '2018-06-21 06:05:50', '7', '4');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('4', 'md', 'Classic Smoothies', '2018-06-21 06:05:48', '2018-06-21 06:05:50', '5', '4');

INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('3', 'lg', 'Classic Smoothies','2018-06-21 06:05:48', '2018-06-21 06:05:50',  '6', '4');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('3', 'lg', 'Classic Smoothies', , '2018-06-21 06:05:48', '2018-06-21 06:05:50''7', '4');
INSERT INTO RecipeAmounts (Amount, Size, Type, createdAt, updatedAt, IngredientId, RecipeId) VALUES ('6', 'lg', 'Classic Smoothies', , '2018-06-21 06:05:48', '2018-06-21 06:05:50','5', '4');