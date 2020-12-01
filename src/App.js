import React from 'react'
import Home from "./pages/Home"
import GlobalStyles from "./components/GlobalStyles"
import {Route, route} from "react-router-dom"
import Nav from "./components/Nav"





function App() {



  return (
    <div className="App">
    <GlobalStyles/>
    <Route path={["/game/:id","/"]}>
    <Nav/>
      <Home />
      </Route>
    </div>
  );
}

export default App;
