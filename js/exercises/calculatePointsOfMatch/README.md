# Calculate points of a match

Our football team finished the championship. The results of each match looks like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such a collection and calculates the points of our team in the championship. Rules for counting points for each match:

- if `x greater than y` - 3 points
- if `x less than y` - 0 point
- if `x equal to y` - 1 point

Notes:

- there are 10 matches in the championship
- 0 <= x <= 4
- 0 <= y <= 4
