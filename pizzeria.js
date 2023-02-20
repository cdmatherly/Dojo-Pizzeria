//Create pizzas using user input crust, sauce, cheese, and toppings
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
        pizza.crust = crustType;
        pizza.sauce = sauceType;
        pizza.cheese = cheeses;
        pizza.toppings = toppings;
        return pizza;
    }

    var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ['pepperoni', 'sausage']);
    var pizza2 = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions']);
    var pizza3 = pizzaOven('deep dish', 'marinara', 'mozzarella', ['bell peppers', 'mushrooms', 'olives', 'sausage', 'pepperoni', 'onions']);
    var pizza4 = pizzaOven('stuffed crust', 'traditional', 'mozzarella', ['pineapple', 'ham'])
    
//Generate random pizza
function randomPizza() {
    var crustType = ['deep dish', 'hand tossed', 'stuffed crust'];
    var sauceType = ['marinara', 'barbeque', 'spicy red', 'ranch', 'buffalo'];
    var cheeses = ['mozzarella', 'feta', 'gruyere', 'ricotta', 'gouda'];
    var toppings = ['pepperoni', 'sausage', 'mushrooms', 'bell peppers', 'olives', 'onions', 'ham', 'pineapple', 'anchovies'];
    var pizza = {};
    pizza.crust = crustType[Math.floor(Math.random() * crustType.length)];
    pizza.sauce = sauceType[Math.floor(Math.random() * sauceType.length)];
    pizza.cheese = cheeses[Math.floor(Math.random() * cheeses.length)];
    pizza.toppings = toppings[Math.floor(Math.random() * toppings.length)];
    console.log(pizza.crust)
    return pizza;
}