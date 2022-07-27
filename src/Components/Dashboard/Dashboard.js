import React from "react";
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { v4 as uuidv4 } from 'uuid';

export const Dashboard = ({newsDrop, searchArticles }) => {
    const allArticles = newsDrop.map((article) => {
        return (
            <ArticleCard art={article} key={uuidv4()}/>
        )
    })
    return (
        <section className="dashboard">
            {searchArticles}
            {allArticles}
        </section>
    )
}