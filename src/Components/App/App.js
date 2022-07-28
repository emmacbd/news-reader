import React, { useState, useEffect } from 'react';
import { getArticles } from '../../apiCalls';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import NavBar from '../NavBar/NavBar';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import './App.css';


const App = () => {
  const [allArticles, setArticles] = useState([])
  const [filtArticles, setFilter] = useState(["home"])
  const [error, setError] = useState('')

  useEffect(() => {
      getArticles(filtArticles)
      .then(data => setArticles(data.results))
      .catch(error => setError(error.message))
  },[filtArticles])


  return (
    <main className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={ () => <Dashboard newsDrop={allArticles} setFilter={setFilter}></Dashboard>}>
        </Route>
        <Route exact path="/:id" render={({match}) => {
          return (<ArticleDetails details={allArticles[match.params.id]}/>)
        }}/>
      </Switch>
    </main>
  );
}

export default App;
