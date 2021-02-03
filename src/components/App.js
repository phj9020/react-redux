import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';


function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/:id" component={Detail}></Route>
    </HashRouter>
  );
}

export default App;
