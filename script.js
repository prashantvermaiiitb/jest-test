const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavorites.com',
    'myfavoritescats2.com'
]
/**
 * Google search function should be Pure function and for this 
 * it should not depend upon the external variables and should 
 * be injected in this function.
 * @param {*} searchInput 
 * @returns 
 */
const googleSearch = (searchInput, dataBase) => {
    const matches = dataBase.filter(website => {
        return website.includes(searchInput);
    })
    return matches.length > 3 ? matches.slice(0, 3) : matches;
}

// let searchInput = 'soup';
// console.log(`🚀 ~ file: script.js:18 ~ googleSearch('${searchInput}'):`, googleSearch(searchInput));
// searchInput = 'cats';
// console.log(`🚀 ~ file: script.js:18 ~ googleSearch('${searchInput}'):`, googleSearch(searchInput));

module.exports = googleSearch;