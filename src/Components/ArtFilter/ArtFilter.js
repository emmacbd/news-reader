import React from "react";

const ArtFilter = ({ setFilter }) => {
    const sections = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "t-magazine", "travel", "upshot", "us", "world"]

    const dropdownFiller = sections.map(section => {
        return <option value={section} key={section}>{section}</option>
    })

    return (
        <section className="filter">
            <label htmlFor="filter-dropdown">Filter Articles By Section :</label>
            <select onChange={(e => setFilter(e.target.value))}>
                <option value="home" key="home">All Articles</option>
                {dropdownFiller}
            </select>
        </section>
    )
}

export default ArtFilter