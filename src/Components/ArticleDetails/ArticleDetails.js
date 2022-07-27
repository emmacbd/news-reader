import React from "react";
import "./ArticleDetails.css"

const ArticleDetails = ({details}) => {

    return(
        <section className="article-details">
            <h3>{details.title}</h3>
            <h4>{details.byline}</h4>
            <p>{details.abstract}</p>
            <button className="link-button"><a href={details.url}>Click Here For Full Article</a></button>
        </section>
    )
}

export default ArticleDetails