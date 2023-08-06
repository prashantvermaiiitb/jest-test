const fetch = require('node-fetch');
const { getPeoplePromise, getPeople, getTodoList } = require('./scripts2');

/**
 * So this 1st method for handling ASYNC function
 * done is a parameter passed automatically to indicate that 
 * jest has to wait for the completion of the promise otherwise 
 * Promise will be returning <pending> state and this will pass.
 */
it('calls swapi to getPeople', (done) => {
    // this will create error since we are using done which will block 
    // call for async function.
    // expect.assertions(0); // ! this will create error
    // expect.assertions(1);
    getPeople(fetch).then(data => {
        expect(data.count).toEqual(87);
        done();
    })
});
/**
 * This is another way of handling the async function
 * we will simply return and jest will wait till the 
 * function returns.
 */
it('calls swapi to getPeople', () => {
    // so this is the trick to remember to put this 
    // assertions() statement.
    // expect.assertions(1);
    // you always have to return the promise else your 
    // test will return in pending state
    // return getPeoplePromise(fetch).then(data => {
    //     expect(data.count).toEqual(87);
    // })
});

it('calls todo List', () => {
    expect.assertions(2);
    return getTodoList(fetch).then(data => {
        expect(data.count).toEqual(100);
        expect(data.results.length).toBeGreaterThan(90);
    });
});

it('call todoList with mockFetch', () => {
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve(
        {
            json: () => Promise.resolve({
                count: 87,
                results: [1, 2, 2, 3, 4, 5, 5, 5, 5]
            })
        }
    ));

    return getPeoplePromise(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toEqual(1);
        expect(data.count).toEqual(87);
        expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people/1');
    });
})