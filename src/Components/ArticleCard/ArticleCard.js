import React from "react";
import "./ArticleCard.css"

export const ArticleCard = ({title, section}) => {
    return (
        <article className="art-card">
            <h2 className="art-title">{title}</h2>
            <h3>Section : {section}</h3>
        </article>
    )
}