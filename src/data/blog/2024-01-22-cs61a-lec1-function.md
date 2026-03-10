---
title: "cs61a_lec1_function"
description: "There are some built-in names in Python:"
pubDatetime: 2024-01-22T00:00:00Z
tags:
  - Notes
  - CS
---

### Names, Assignment, and User-Defined Functions

There are some `built-in` names in Python:


```python
>>> from math import pi, sin
>>> sin(pi/2)
1.0
```


We can define our own names using `Assignment statements`:


```python
>>> radius = 10
>>> radius
10
>>> area, circ = pi * radius * radius, 2 * pi * radius
>>> area
314.1592653589793
>>> radius = 20
>>> area
314.1592653589793 #didn't change!
```


Assignment statements can also be used to gave name to `functions`:


```python
>>> max(1, 2, 3)
3
>>> f = max
>>> f
<built-in function max>
>>> max = 7
>>> max
7
>>> f(1, 2, max)
7
>>> max = f
>>> max
<built-in function max>
>>> max(1, 2, 3)
3
```


There are function names for common infix operators:


```python
>>> from operator import add, mul
>>> add
<built-in function add>
>>> mul
<built-in function mul>
```


A `def statement` lets us create our own functions:


```python
>>> from operator import add, mul
>>> def square(x):
...     return mul(x, x)
...
>>> square
<function square at 0x7f65cd0bbd80>
>>> square(11)
121
>>> square(square(3))
81
```


Back to radius and area, area and radius now are out of sync:


```python
>>> radius
20
>>> area
314.1592653589793 #out of sync
>>> def area():
...     return pi * radius * radius
...
>>> area
<function area at 0x7e6f9330fd80>
>>> area()
1256.6370614359173
>>> radius = 10
>>> area()
314.1592653589793
```


There are two kinds of expressions:

-   Primitive expressions includes:
    -   `Number` or `Numeral`
    -   `Name`
    -   `String`
-   Call expressions are combined with:
    -   `operator`
    -   `operand`

What is the value of the final expression in this sequence?


```python
>>> f = min
>>> f = max
>>> g, h = min, max
>>> max = g
>>> max(f(2, g(h(1, 5), 3)), 4)
```


### Environment Diagrams

`Environment diagrams` visualize the `interpreter`'s process

-   Code (left):
    -   Concludes statements and expressions:
    -   Arrows indicate evaluation order
-   Frame (right):
    -   Tracks name bounded to a value
    -   Within a frame, a name cannot be repeated (the old bond will be lost)\
        Here is the [link](https://pythontutor.com/cp/composingprograms.html#mode=edit) of the online python tutor

Assignment statements change the bindings between names and values in `frames`

Execution rule for assignment statements:

1.  Evaluate all expressions to the right of = from left to right
2.  Bind all names to the left of = to the resulting values in the current frame\
    Here is an [example](https://suo.yt/a2r33SR)

### Defining Functions

Assignments bind names to values, and `function definition` is a more powerful means of `abstraction`: binds names to expressions


```python
def <'name'>(<'formal parameters'>): #names refer to the arguments
                                    #values passed to the function
	return <'return expression'>
```


Execution procedure for def statements:

1.  Create a function with signature `<name>(<formal parameters>)`\
    This signature has all the information needed to create a local frame
2.  Set the body of that function to be everything indented after the first line (not executed)
3.  Bind `<name>` to that function in the current frame

Here is the procedure for calling/applying user-defined functions:

1.  Add a local frame, forming a new `environment`
2.  Bind the function's `formal parameters` to its `arguments` in that frame
3.  Execute the body of the function in that new environment

An environment is a sequence of frames\
A name evaluates to the value bound to that name in the earliest frame of the current environment in which that name is found\
Here is an example:


```python
>>> from operator import mul
>>> mul(3, 4)
12
>>> def square(square):
...     return mul(square, square)  #Why does this work?
...
>>> square
<function square at 0x76f8f4b47ce0>
>>> square(4)
16
```


In the *frame* created by def statement, there is *already* a *formal parameter* called 'square', the program won't look it up in `global frame`, which will not make function square and expression square get mixed.

### Print and None

Evaluating something in `interpter` is not equal to `print` it out


```python
>>> -2
-2
>>> print(-2)
-2
>>> 'Go Bears!'
'Go Bears!'
>>> print('Go Bears!')
Go Bears!
>>> None
>>> print(None)
None
>>> print(1, 2, 3)
1 2 3
>>> 1, 2, 3
(1, 2, 3)
>>> print(None, None)
None None
>>> print(print(1), print(2))  #What happened here?
1
2
None None
```


The special value `None` represents nothing in Python\
A function that does not explicitly return a value will return None\
None is *not displayed* by the interpreter as the value of an expression


```python
>>> radius = 10
>>> radius
10
>>> area, circ = pi * radius * radius, 2 * pi * radius
>>> area
314.1592653589793
>>> radius = 20
>>> area
314.1592653589793 #didn't change!
```
0

There are two kinds of functions:

-   Pure Functions:
    -   Just return values

        
```python
>>> radius = 10
>>> radius
10
>>> area, circ = pi * radius * radius, 2 * pi * radius
>>> area
314.1592653589793
>>> radius = 20
>>> area
314.1592653589793 #didn't change!
```
1
-   Non-Pure Functions:
    -   Have side effects\
        A side effect isn't a value, but anything that happeds as a consequence of calling a function


```python
>>> radius = 10
>>> radius
10
>>> area, circ = pi * radius * radius, 2 * pi * radius
>>> area
314.1592653589793
>>> radius = 20
>>> area
314.1592653589793 #didn't change!
```
2
