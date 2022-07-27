import React, { useState, useEffect } from 'react';
import { fetchArticles } from '../../apiCalls';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import NavBar from '../NavBar/NavBar';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import ArtFilter from "../ArtFilter/ArtFilter";
import './App.css';


const App = () => {
  const [allArticles, setArticles] = useState(["home"])
  const [filtArticles, setFilter] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchArticles.getArticles("home")
      .then(data => setArticles(data.results))
      .catch(error => setError(error.message))
  }, [])

  // useEffect((topic) => {
  //   fetchArticles.getArticles(topic)
  //     .then(data => setArticles(data.results))
  //     .catch(error => setError(error.message))
  // }, [])




  return (
    <main className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" >
          {<ArtFilter setFilter={setFilter}/>}
          {<Dashboard newsDrop={allArticles} searchArticles={filtArticles}/>}
        </Route>
        <Route exact path="/details">
          {ArticleDetails}
        </Route>
      </Switch>
    </main>
  );
}

export default App;
