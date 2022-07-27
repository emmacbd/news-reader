import React from "react";
import "./ArticleDetails.css"

const ArticleDetails = ({details}) => {

    return(
        <section className="article-details">
            <img src={details.multimedia[1].url} />
            <h3>{details.title}</h3>
            <h4>{details.byline}</h4>
            <p>{details.abstract}</p>
            <button className="link-button"><a href={details.url} target="_blank">Click Here For Full Article</a></button>
        </section>
    )
}

export default ArticleDetails