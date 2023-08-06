/**
 * These tests will never go in production.
 */
const googleSearch = require("./script");

const dbMock = [
    'dogs.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
];

/**
 * To group the test that are similar describe() block is used 
 */
describe('googleSearch', () => {
    it(`it's silly test`, () => {
        expect('hello').toBe('hello');
    })

    it('Test running in scripts.spec.js file.', () => {
        expect(googleSearch('testtest', dbMock)).toStrictEqual([])
        expect(googleSearch('dogs', dbMock)).toStrictEqual(['dogs.com'])
        // console.log("🚀 ~ file: scripts.spec.js:5 ~ it ~ googleSearch:", googleSearch('dogs', dbMock));
    });

    it('work with undefined and null', () => {
        expect(googleSearch(undefined, dbMock)).toStrictEqual([])
        expect(googleSearch(null, dbMock)).toStrictEqual([])
    });

    it('matches will return max 3 result.', () => {
        expect(googleSearch('.com', dbMock).length).toBeLessThan(4);
        expect(googleSearch('.com', dbMock).length).toEqual(3);

    });
});

