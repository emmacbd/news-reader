import React from "react";
import { NavLink } from 'react-router-dom';
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { v4 as uuidv4 } from 'uuid';
import "./Dashboard.css"

const Dashboard = ({ newsDrop}) => {
    const allArticles = newsDrop.map((article) => {
        return (
            <NavLink key={uuidv4()} to={`/articles/${article}`}>
                <ArticleCard 
                title={article.title}
                section={article.section}
                id={article.ui}
                 />
            </NavLink>
        )
    })
    return (
        <section className="dashboard">
            <article className="article-container">
                {allArticles}
            </article>
        </section>
    )
}
export default Dashboard;