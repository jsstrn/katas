# Who likes this?

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function `whoLikesThis()` that takes in array containing the names of people who like an item. It must return the display text as shown in the examples:

```
whoLikesThis() [] // returns "no one likes this"
whoLikesThis(["Peter"]) // returns "Peter likes this"
whoLikesThis(["Jacob", "Alex"]) // returns "Jacob and Alex like this"
whoLikesThis(["Max", "John", "Mark"]) // returns "Max, John and Mark like this"
whoLikesThis(["Alex", "Jacob", "Mark", "Max"]) // returns "Alex, Jacob and 2 others like this"
```
