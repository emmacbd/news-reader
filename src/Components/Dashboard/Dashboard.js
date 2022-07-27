import React from "react";
import { Link } from 'react-router-dom';
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { v4 as uuidv4 } from 'uuid';
import "./Dashboard.css"

const Dashboard = ({ newsDrop}) => {
    const allArticles = newsDrop.map((article, i) => {
        return (
            <Link key={uuidv4()} to={`/${i}`}>
                <ArticleCard 
                title={article.title}
                section={article.section}
                id={article.ui}
                 />
            </Link>
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