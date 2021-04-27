//variables
    // SWBAT  define a variable 
    // What is a variable?
        // Variables are keywords that we communicate to the computer along with values(aka data) to be stored in memory.
            // a place to store data
            // like a box storing data
            // Container for data
            // 3 types of variable declaration: var, let and const
    // Differences between the 3: 
    var x = 2
    var x = 3    //! does not raise an error when we redefine using var keyword
    // DON'T USE VAR!!!

    let x = 2
    let x = 3  //! raises error SyntaxError: Identifier 'x' has already been declared

    const x = 2
    const x = 3 //! raises error SyntaxError: Identifier 'x' has already been declared

    var x = 2  // Variable assignment expression
    x = 3 // variable re-assignment expression
    console.log(x)

    let x = 2
    x = 3
    console.log(x)

    const x = 2
    x = 3 // raises error TypeError: Assignment to constant variable.
    console.log(x)

    const array = [1,2,3]
    console.log(array)
    array[3] = 4  // we can update the data stucture within a const, but cannot reassign it
    // array = [1,2,3,4] ! raises error TypeError: Assignment to constant variable.
    console.log(array)

//data types
    let datatypes = {
        string: "This is a string",
        number: 23,
        boolean: true,
        array: [1,2,3],
        object: {key: " this is a nested object"},
        not_a_number: NaN,   // actually a number 
        undefined: undefined,
        null: null 
    }

    console.log(typeof(datatypes["not_a_number"]))

//functions
    // SWBAT define functions and invoke them with or with out parameters

    // What is a function?
        // a function is a block of code containing expressions to perform a particular task
            // A JavaScript function is a block of code designed to perform a particular task.
            // Block of expressions
            // a piece of code that returns a value 
            // Functions are the way we manipulate data

    // How to Define a function:
        // begin with the key word function
        // followed by the name of the function
        // parenthesis to enclose potential parameters
        // curly braces to enclose code block to save

    function greeting(){
        console.log("Hello World")   // function definition w/out parameters
    }

    greeting() // invoking a function w/out arguments (also referred to as calling or executing)
    
    // What are parameters?
    /* parameters are very similar to variable's keyword, when we define a function to accept a parameter like we do in personalGreeting,
    it is reserving the keyword we decided on, in this case 'name', and communicating to the computer, 
    "Hey, when this function is invoked, expect some data, and assign that data to the keyword 'name'"*/
    
    // when the personalGreeting function is being executed or invoked like so, personalGreeting("Archer")
    // the block of code being executed is:
    { 
        console.log(`Hello there, ${name}!`)
    }
    // but you could imagine the computer is doing something that looks like this: 
    {
        let name = "Archer" // "Archer" was the argument passed inf
        console.log(`Hello there, ${name}!`)
    }
    
    // What are arguments?
    /* if a parameter is similar to a variable's keyword, we could can consider an argument to be similar 
    to the data a variables keyword points to */
    
    function personalGreeting(name){
        console.log(`Hello there, ${name}!`) // function definition with parameters
    }
    
    personalGreeting("Mike") // calling a function w/ arguments
    personalGreeting("Ethan")
