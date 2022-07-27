import React, {useEffect, useState} from "react";

export const ArtFilter = () => {

     searchByCategory = (topic) => {
        useEffect((topic) => {
            fetchArticles.getArticlesByCategory(topic)
                .then(data => setArticles(data.results))
                .catch(error => setError(error.message))
        }, [])
    }
    return (
        <>
        </>
    )
}