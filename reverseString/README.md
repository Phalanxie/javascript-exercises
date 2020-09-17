# Exercise 02 - Reverse a String.

Pretty simple, write a function called `reverseString` that returns its input, reversed!

```javascript
reverseString('hello there') // returns 'ereht olleh'
```

You will notice in this exercise that there are multiple tests, after making the first one pass, enable the others one by one by deleting the `x` in front of the `it()` function.



## Hints
Strings in JavaScript cannot be reversed directly so you're going to have to split it into something else first.. do the reversal and then join it back together into a string.

What you can do is make a function that takes a string separates words into arrays, uses the length method to have a value for the words, then reverse the index of that word and print it on the console, also reversing the order of words in the string to be shown in reverse order