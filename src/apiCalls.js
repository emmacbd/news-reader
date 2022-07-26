
//All possible fetch categories
// arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t - magazine, travel, upshot, us, world


require('dotenv').config()
const api_key = process.env.API_KEY

const fetchArticles = {
    getHomeArticles() {
        return fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q={home}&api-key={api_key}')
            .then(response => {
                if (!response.ok) {
                    throw new Error('error')
                } else {
                    return response.json
                }
            })
    },

    getArticlesByCategory(category) {
        return fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q={${category}}&api-key={api_key}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('error')
                } else {
                    return response.json
                }
            })
    }
}

export { fetchArticles }