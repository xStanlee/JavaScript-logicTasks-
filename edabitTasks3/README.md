# Translate from Human to Programmer

Replace the numbers in a string with their binary form.

## Examples

```
replaceNums("I have 2 sheep.") ➞ "I have 10 sheep."

replaceNums("My father was born in 1974.10.25.") ➞ "My father was born in 11110110110.1010.11001."

replaceNums("10hell76o4 boi") ➞ "1010hell1001100o100 boi"
```

## Notes 
    - There are possibly two or more numbers in a single word (I do not recommend splitting the text at spaces, it surely won't help).
    - Anything separates two numbers, even spaces ("2 2" --> "10 10").
