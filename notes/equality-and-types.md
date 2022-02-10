---
title: "Equality and types"
date: "February 4, 2022"
excerpt: "An overview of JS types and equality"
cover_image: "/images/posts/img1.jpg"
tags: ["JavaScript"]
category: "JavaScript"
author: "John Doe"
author_image: "https://randomuser.me/api/portraits/men/11.jpg"
---

# Types and Equality

## Different types in JavaScript

### Primitive Types

1. Boolean - true/false
2. Number - Integer or Double
3. String - "a" or 'a'
4. Null - null
5. Undefined - undefined

### Non Primitive Type

1. Object - {} or new Object()

## typeof

typeof(true) // boolean

typeof(null) will be an object but it's incorrect but should be null (which is a longterm bug in JS)

Difference between dynamically typed or a static typed language like Java?

JAVA defines it like String a = 'moo' - so we tell JAVA this variable holds a String - before the code is run, you need to specify the type and can't change it afterwards to be a = 1
in JS we could do

var a = 'moo' // type is infered by what we assign it too
but we can change it later on
a = 1

JS: type is determined dynamically at run time when we run the application
in JAVA it is determined when we write the code

DT: it can be easier to write, quicker to get up and running, but can result in errors in run time (e.g. a function is expecting a string)
STL: when we compile it will throw an error if the variable holds the wrong type, memory management can be more controlled

### null and undefined

var a;
console.log(a) => undefined - JS doesn't know the type and means no value (no initialisation), unknown variables, unknown properties
so it's the way of JS engine to inform you that it's either an uninitialised variable, a paramter that is missing from the functions parameters list or an unkown property of an object

null is used by programmers to set the value to null, JS engine will never set null for you

(in JAVA null is the concept of absence of a value)

### == and ===

== equality
=== strict equality

=== checks for type and value
== checks only for value

0 === 0 // true
0 !== 1 // true
0 == 0 // true
0 != 1 // true

'' == '0' // false => value is not the same
0 == '' // true
0 == '0' // true
0 === '' // false
0 === '0' // false because different types

with == JS converts the values to the same type e.g. 0 to a string
type coersion
RULES:

BUT
false == 'false' // false -> because JS tries to convert the string into a boolean and Boolean('false') === true

Much better to use the strict operator

Reference: [Equality Table](https://dorey.github.io/JavaScript-Equality-Table/)

### NaN (Not a Number)

typeof(NaN) // number

NaN compared to any other value with (==) will be false and also NaN == NaN will always be false
isNaN(NaN) // true
but this function has it's own errors e.g. isNaN("A") // true = JS coerce A into a Number
isNaN("1") => it is coercing the string into a number and will return false

Trick in JS: foolproof way to check if it's NaN by checking the equality to itself
var a = NaN;
a !== a // true
will check if a variable is in fact NaN
