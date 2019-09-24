import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Form from "./components/form";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/form'>Form</Link>

        <Route path="/form" component={Form} />
      </BrowserRouter>
    </div>
  );
}

export default App;
