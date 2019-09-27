import React from 'react';
import { /* BrowserRouter, */ Route, Link } from 'react-router-dom';
import Form from "./components/form";
import About from "./components/about";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <div>
        <ul>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/form'>Form</Link></li>
          <li><Link to='/'>Home</Link></li>
        </ul>
      </div>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path='/about' component={About} />
      <Route path="/form" component={Form} />
    </div>
  );
}

export default App;
