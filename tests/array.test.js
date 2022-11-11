const { findPairs } = require('../src/lib/array.util.js');

describe('sum module', () => {
    test('sum equal to n', () => {
        expect(findPairs([1, 9, 5, 0, 20, -4, 12, 16, 7], 12)).toStrictEqual([
            [-4, 16],
            [0, 12],
            [5, 7],
        ]);
    });
});