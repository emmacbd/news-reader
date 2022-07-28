import React from "react";
import { Link } from 'react-router-dom';
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { v4 as uuidv4 } from 'uuid';
import ArtFilter from "../ArtFilter/ArtFilter";
import "./Dashboard.css"

const Dashboard = ({ newsDrop, setFilter}) => {
    const allArticles = newsDrop.map((article, i) => {
        return (
            <Link key={uuidv4()} to={`/${i}`} className="art-card">
                <ArticleCard 
                title={article.title}
                categories={article.des_facet.join(', ')}
                id={article.ui}
                 />
            </Link>
        )
    })
    return (
        <section className="dashboard">
            <ArtFilter setFilter={setFilter} />
            <article className="article-container">
                {allArticles}
            </article>
        </section>
    )
}
export default Dashboard;