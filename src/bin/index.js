#! /usr/bin/env node
const yargs = require("yargs");
const { findPairs } = require('./../lib/array.util');

const options = yargs
    .usage("Usage: -a <array> -n <number>")
    .option("a", { alias: "array", describe: "Your array", type: "array", demandOption: true })
    .option("n", { alias: "n", describe: "given n", type: "number", demandOption: true })
    .argv;

const array = options["array"].length > 1 ? options["array"] : (options["array"][0] + '').split(",").map(i => Number.parseInt(i, 10))
const n = options["n"]

console.log("Arguments:")
console.log("array =", array)
console.log("n =", n)
console.log("\nFound pairs that sum is equal to n ")
console.log(findPairs(array, n))