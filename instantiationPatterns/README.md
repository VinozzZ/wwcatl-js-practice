# Instantiation Patterns

JavaScript offers four different instantiation patterns for objects.
Here are the 4 patterns:

1. Functional Instantiation
2. Functional-share Instantiation
3. Prototypal Instantiation
4. Psuedoclassical Instantiation

We will take a look at each of them below.

## Goal of Exercise
The goal is to implement a queue and a stack using all four instantiation patterns.

## Getting Started
Open the file "SpecRunner.html" in your browser. This will show the results of running tests.
Your goal is to make all the tests work. To get started open up the src/ directory.
Inside the src/ directory is a directory for all four instantiation patterns. 

In each folder that is a javascript file to implement a queue and a stack. Your goal is to create the code needed using that 
instantiation method so that all the tests pass.

## Description of Every Instantiation Pattern

### Functional Instantiation
Functional instantiation is at the root of object instantiation in JavaScript. We create a function, and inside it, we can create an empty object, some scoped variables, some instance variables, and some instance methods. At the end of it all, we can return that instance, so that every time the function is called, we have access to those methods.

### Functional Shared Instantiation
Functional-shared instantiation is similar to functional instantiation, but the methods are an extension of the function instead. Like before, we create an empty object inside our function and return that object. Before we return it though, we extend it with some function methods. For that, we'll need an extender function. 

### Protypal Instantiation
Prototypal instantiation (which doesn't actually use the keyword prototype) is done by attaching methods directly to the object's prototype using the Object.create() method. It's fairly similar to the previous pattern, except this time, the returned object has prototypal methods that directly reference the funcMethods object. 

### Pseudoclassical Instantiation
The last pattern is the pseudoclassical pattern, which takes a bit of the long-windedness out of the prototypal pattern. It does, as before, attach methods directly to the object's prototype. Another point of interest is the fact that the object's constructor is automatically included. This means that we can create new instances using the new keyword. The reason for this is that some behind the scenes work goes down in this pattern. Before and after all code in the object's body, this = Object.create(Object.prototype); and return this; get run in the background.

## Solution
The solution is found in the solution/ folder.