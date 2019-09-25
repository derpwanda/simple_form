import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Form from "./components/form";
import About from "./components/about";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/form'>Form</Link>

        <Route exact path="/" component={Home} />
        <Route path='/about' component={About} />
        <Route path="/form" component={Form} />
      </BrowserRouter>
    </div>
  );
}

export default App;
