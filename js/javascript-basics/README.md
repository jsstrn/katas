# javascript-basics

## Exercise 1

Write a function that takes a list of fruits and transforms it into an object with each fruit as its keys and zero (0) as its value.

Example:

```
// Before
["apples", "bananas", "cherries"]

// After
{
  apples: 0,
  bananas: 0,
  cherries: 0
}
```

## Exercise 2

```
// Before
[
  {name: "John", birthdate: "9 October 1940"}, 
  {name: "Paul", birthdate: "18 June 1942"}, 
  {name: "Ringo", birthdate: "7 July 1940"}, 
  {name: "Adam", birthdate: "9 October 1940"}, 
  {name: "Angeline", birthdate: "18 June 1942"}, 
  {name: "Anita", birthdate: "7 July 1940"}, 
]

// After
{
  "7 July 1940": [Ringo, Anita],
  "9 October 1940": [John, Adam],
  "18 June 1942": [Paul, Angeline],
}
```