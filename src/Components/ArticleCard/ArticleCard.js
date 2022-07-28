import React from "react";
import "./ArticleCard.css"

export const ArticleCard = ({title, categories}) => {
    return (
        <article >
            <h2 className="art-title">{title}</h2>
            {categories.length ? 
            <section className="topics">
                <h4 className="art-topic">Article Topics : </h4>
                <p>{categories}</p> </section>: '' }
            
            
        </article>
    )
}