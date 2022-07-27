import React, { useState, useEffect } from 'react';
import { fetchArticles } from '../../apiCalls';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import NavBar from './NavBar';
import ArticleDetails from './ArticleDetails';
import './App.css';


const App = () => {
  const [allArticles, setArticles] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchArticles.getHomeArticles()
      .then(data => setArticles(data.results))
      .catch(error => setError(error.message))
  }, [])



   const searchByCategory = (topic) => {
    useEffect((topic) => {
      fetchArticles.getArticlesByCategory(topic)
        .then(data => setArticles(data.results))
        .catch(error => setError(error.message))
    }, [])
  }


  return (
    <main className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" >
          {<Dashboard newsDrop={allArticles} searchArticles={searchByCategory}/>}
        </Route>
        <Route exact path="">
          {ArticleDetails}
        </Route>
      </Switch>
    </main>
  );
}

export default App;
