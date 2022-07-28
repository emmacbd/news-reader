
// console.log(process.env)
// const API_KEY = process.env.REACT_APP_API_KEY;
// console.log("log", process.env.REACT_APP_API_KEY)

const  getArticles = (category) => {
        return fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=hWFebNgGuXbNmfxJtLWf8VvCyFDleiay`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('error')
                } else {
                    return response.json()
                }
            })
    }

export { getArticles }