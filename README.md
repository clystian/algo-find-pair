# Find Pair
Find the pairs in an array whose sum of a number N

## Task

create a function that finds pairs of integers from a list that
sum to a given value. The function will take as input the list of numbers as
well as the target sum.

create a command line tool that takes as command line
arguments a comma separated list of integers, and the target integer.

You can assume that all input values are integers.
You can assume that there aren't any repeat values in the list.

# How to run tests
```bash
npm run test
```
 
# How to run on command line with custom inputs

and run with custom inputs
-a <array> -> numbers separated by comma, example: 1,2,3,4
-n <number> -> integer number, example: 4

## running with npx
```bash
npx algo-find-pair -a 1,9,5,0,20,-4,12,16,7 -n 12  
```
![execution animation](https://i.ibb.co/rkFCv5k/algo-find-pair.gif)

## running from source code

Before any execution we need install dependencies
```bash
npm install
```

```bash
node . -a 1,9,5,0,20,-4,12,16,7 -n 12  
```
