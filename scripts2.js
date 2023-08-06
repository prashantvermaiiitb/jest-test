// const fetch = require("node-fetch");

function getPeoplePromise(peopleFetch) {
    console.log('Inside getPeoplePromise() function call... ');
    return peopleFetch('https://swapi.dev/api/people/1')
        .then(response => response.json())
        .then(data => {
            // console.log("🚀 ~ file: scripts2.js:7 ~ getPeople ~ data:", data);
            return {
                count: data.count,
                results: data.results
            };
        });
}

async function getPeople(peopleFetch) {
    console.log('Inside getPeople() function call... ');
    const response = await peopleFetch('https://swapi.dev/api/people/1');
    const data = await response.json();
    // console.log("🚀 ~ file: scripts2.js:20 ~ getPeople ~ data:", data)
    return {
        count: data.count,
        results: data.results
    };
}

async function getTodoList(fetch) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return {
        count: data.length,
        results: data
    }
}

module.exports = {
    getPeoplePromise,
    getPeople,
    getTodoList
}
