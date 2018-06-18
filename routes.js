module.exports = function(app){
    const Ingredients_routes = require('./routes/Ingredients_routes');

    app.use('/ingredients', Ingredients_routes);
    console.log('routes.js works');
//other routes..
}