
import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  
} from "react-router-dom";

import Table from "./component/Table";
import Chart from "./component/Chart"


function App() {
  return (
  <>

 <Router>
     <Switch>
     <Route exact path="/">
            <Table/>
          </Route>
          <Route exact path="/chart">
            <Chart/>
          </Route>
     </Switch>

    </Router>
  </>
  );
}

export default App;
