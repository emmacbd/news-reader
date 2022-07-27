import React, { useState, useEffect } from 'react';
import { fetchArticles } from '../../apiCalls';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import NavBar from '../NavBar/NavBar';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import ArtFilter from "../ArtFilter/ArtFilter";
import './App.css';


const App = () => {
  // const [allArticles, setArticles] = useState(["home"])
  const [filtArticles, setFilter] = useState(["home"])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchArticles.getArticles("home")
      .then(data => setFilter(data.results))
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
      <ArtFilter setFilter={setFilter} />
      <Switch>
        <Route exact path="/" render={ () => <Dashboard newsDrop={filtArticles}></Dashboard>}>
        </Route>
        <Route exact path="/:id" render={(match) => {
          return (<ArticleDetails details={filtArticles[match.match.params.id]}/>)
        }}/>
      </Switch>
    </main>
  );
}

export default App;
