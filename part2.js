// Part 1 Review

// 1. declare a constant variable favoriteFood equal to your favorite food 
// 2. declare a function named yum that uses the above variable to console.log a string "Mmmmmmm, __________!" << insert favoriteFood
// 3. invoke yum
// 4. declare another function named yummy that can accept a string datatype as an argument and console.log the same string as the function yum
// 5. invoke yummy passing it an argument of your second favorite food

function yummy(favoriteFood) {
    console.log(`Mmmmmmm, ${favoriteFood}!`)
    // return `MMMMMm, ${favoriteFood}!`
}

// yummy("spaghetti")
// console.log(message)
/*
JavaScript Fundamentals Part 2 
SWBAT
 - declare a function with multiple parameters
 - invoke functions passing them multiple arguments
 - declare a function to have an optional parameter 
 - understand the concept of truthy vs falsey 
 - use an if..else if statement to conditionally execute code 
*/


// declare a function with two parameters
    // both arguments will be strings representing food
        // function should return a string "MMMMMMMMM, pancakes and crawfish, my two favorites!!"

    function twoFavoriteFoods(favoriteFoodOne, favoriteFoodTwo){
        console.log(`MMMMMMMM, ${favoriteFoodOne} and ${favoriteFoodTwo}, my two favorites!!`)
        return `MMMMMMMM, ${favoriteFoodOne} and ${favoriteFoodTwo}, my two favorites!!`
        debugger 
    }

    // const twoFavorites = (favoriteFoodOne, favoriteFoodTwo) => { console.log(`MMMMMMMM, ${favoriteFoodOne} and ${favoriteFoodTwo}, my two favorites!!`)}

    let foodOne = "sushi"
    let foodTwo = "oxtail"

    // twoFavoriteFoods("Sushi", "Oxtail")
    // twoFavoriteFoods("Oxtail", "Sushi")




// declare a function that accepts two arguments, order matters
    // one argument will represent a restaurant, the other will represent the restaurants special dish
        // function will console log "Welcome to restaurant, tonight's special is special dish."

    function dailySpecial(restaurant, dish){
        console.log(`Welcome to ${restaurant}, tonight's special is ${dish}.`)
    }

    // dailySpecial("Byblos", "Puppy Drum")
    // dailySpecial("Puppy Drum""Byblos")

// declare a function with two parameters, order matters, and one parameter is optional
    // one parameter will be a name, the second will be language and by default it will be set to "computer programming"
        // function will return a string "Hello name! Are you excited to learn about language?!"

        function learn(language="computer programming"){
            console.log(`Are you excited to learn about ${language}?`)
        
        }

        // learn()
        // learn("JavaScript")

        function learnLanguage(name, language="computer programming"){
            console.log(typeof(name), typeof(language))
            console.log(`Hello ${name}, are you excited to learn ${language}`)
        }

        // learnLanguage("Tyler")
        learnLanguage("Ethan", "Rust")  

// create an if statement that conditionally executes code

// define a function that accepts one argument, a programming language defaulting to "computer programming"
        // check to see if language is JavaScript, if it is console.log ("Yay JS")
            // else console.log("boo")


let isRoomClean = NaN
// distance > 400 && distance < 2000
function momChecksRoom(){
    if(isRoomClean){    // if(conditonal statement){
        console.log("Good job, sweetie!")       // code to execute if condition is true
    } else {
        console.log(" you are grounded forever!") // code to execute if condition is false
    }                           // if(conditonal statement){
}

// momChecksRoom()