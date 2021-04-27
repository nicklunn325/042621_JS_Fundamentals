# JavaScript Fundamentals Pt. 1
## What is JavaScript? and why are we learning it?
Great questions! JavaScript is a programming language that allows you to give HTML(the building blocks of web pages) behavior.  This is important because there are over a billion web pages out there, and if we want them to do anything other than sit there and display static information we need JavaScript(...or TypeScript, PHP or other scripting languages) to do the job. If a website is interactive and has dynamic features it is pretty likely that JavaScript was used over other scripting languages, according to this 2020 [StackOverflow survey](https://insights.stackoverflow.com/survey/2020), JavaScript is the most popular programming language out there and has been for eight years! 
## Programming is about Communicating
At its core programming is all about communication. It is us communicating with computers, and them responding.  Believe it or not, computers are great communicators! You are probably thinking "no way! what about the 100 line stacktrace it gave me with no helpful error message!".  The difficult thing about communicating with computers is that they are very particular about how you communicate with them.  Think grade school English teacher responding to your plea to use the restroom with "I don't know, can you?".  It is all about the grammar, or in the case of programming languages, syntax.  

If our syntax is off by a hair, our code won't run and it could could potentially provide a lengthy error message. But this is just the computer being a great communicator. It is telling you everywhere it has been and everything it has done, as well as most times, the spot in your code where there is a syntax error.  A syntax error is simply us miscommunicating with the computer.  This can be annoying, most people don't like being corrected on their grammar or how to speak, and when it comes to learning to "speak computer" you will be corrected early and often.  This is good thing, it also means that when you properly communicate with the computer, it will do exactly what you ask it to.
## What are Variables?
Variables are keywords that we *communicate* to the computer along with values(aka data) to be stored in memory.  In the below example the keyword in the variable definition is greeting and it points to the data "Hello World".   
```
const greeting = "Hello World"
```
This means the computer is going to take the data "Hello World" and store it in memory.  It will also know that if we use the keyword greeting, that we are referring to that data.
```
console.log(greeting)
// Hello World
``` 
In JavaScript we can define variables using three different keywords: var, let, and const.  Here is a great [blog post](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/) on the differences between the three.

For now it is important to know that we will be using let and const going forward.  They were introduced with ES6 in 2015 because there were a few scope and declaration issues with the var keyword.  
## What are Functions?
While variables allow us to attach keywords to pieces of data, functions allow us to a attach keywords to a block of code. This block of code is simply a set of statements that performs a task for us. The below function performs the simple task of logging a general greeting.
```
function greeting(){
    console.log("Hello there!")
}

greeting()
// Hello There!
```
 Often times functions will accept input data, and then use that data to perform the task the function is intended to.
 ```
 function personalGreeting(name){
     console.log(`Hello there, ${name}!`)
 }

 personalGreeting("student")
 // Hello there, student!
 personalGreeting("Howard")
 // Hello there, Howard!
 ```


## SWBAT 
- define variables
- recognize different datatypes
- define functions
- understand function parameters 


