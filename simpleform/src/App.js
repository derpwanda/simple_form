import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Form from "./components/form";

function App() {
  return (
    <div className="App">

      <Link to='/'>Home</Link>
      <Link to='/form'>Form</Link>

      <Route exact path="/" component={Home} />
      <Route path="/form" component={Form} />

    </div>
  );
}

export default App;
