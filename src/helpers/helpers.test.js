import { getUniqueID } from './index';

const testLength = 15;

describe('Helpers: ', () => {

    test('getUniqueID should be a function', () => {
        expect(typeof getUniqueID).toBe('function');
    });

    test(`getUniqueID should return value of length ${testLength}`, () => {
        expect(getUniqueID(testLength)).toHaveLength(testLength);
    });

    test('getUniqueID should consists only from symbols ' +
        '(ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789)', () => {
        expect(getUniqueID(testLength)).toMatch(
            new RegExp(`[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789]{${testLength}}`));
    });

    test('getUniqueID should return unique values', () => {
        const arr = [];

        for (let i = 0; i < 1000; i++) {
            arr.push({ key: getUniqueID(testLength) });
        }
        //arr.push(arr[0]); //check
        const set = new Set(arr);

        expect(arr.length).toBe(set.size);
    });

});
