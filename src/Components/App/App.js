import React, {useState, useEffect} from 'react';
import { fetchArticles } from '../../apiCalls';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from './Header';
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
  })
}


  return (
    <main className="App">
      <NavBar /> 

    </main>
  );
}

export default App;
