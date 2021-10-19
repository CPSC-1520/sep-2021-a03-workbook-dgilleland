# JavaScript Grammar

## Keywords

- **`let`** and **`var`** are used to declare variables
- **`const`** is used to declare a variable whose value cannot be changed
- **`function`** is used to declare a function
- **`if`** and **`else`** are flow control keywords
- **`return`** is used to exit a function

## Declaring Variables

Declaring variables is all about creating an **identifier** (aka "variable name") to "hold" or represent a value of interest. You cannot use keywords as identifiers.

- var, let, const

## Functions

The three key things for **declaring** a function is that it requires the `function` keyword, a *parameter list*, and a *body* for the function. A **function declaration** is the set of instructions that are to be executed when the function is called.

```js
function (zero, or, more, variables, asParameters) {
    // Body of the function, enclosed in curly braces
}
```

In the body of a function, you can include a **return statement** that can send back (*`return`*) a single value to the function call. When the `return` is encountered, then the function will exit and control will return to the caller of the function.

A **function call** requires using the function's name (if it is a named function or function pointer) and sending in *arguments* for each of the function's parameters.

```js
doSomething(5, 'bob')
```

## Flow-Control Statements

### If-Else

The grammar of the if-else statement is as follows,

```js
if(conditionalExpression)
    // statement or statement block
else
    // statement or statement block
```

... where `conditionalExpression` is some expression resulting in a `true` or `false` value. The `statement or statement block` immediately after the if runs when the conditional expression is `true`; the statement/statement block after the else runs when the conditional expression is `false`. The else portion is optional.

> A statement block is zero or more statements inside of curly braces.

If-else statements provide a way for your code to choose which *mutually exclusive* statements to run.

### Looping
