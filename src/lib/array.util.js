"use strict";

function findPairs(nums, n) {
    const arr = [...nums].sort()
    const size = arr.length;

    const results = [];

    for (let i = 0; i < (size - 1); i++) {
        for (let j = (i + 1); j < size; j++) {
            if (arr[i] + arr[j] == n) {
                results.push([arr[i], arr[j]]);
            }
        }
    }

    return results;

}

module.exports = { findPairs }
