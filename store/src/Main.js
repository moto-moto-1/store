import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import {Provider} from 'react-redux';
import store from './store';
import Welcome   from "./pages/Welcome"
import AdminPanel   from "./pages/AdminPanel"
import Contact   from "./pages/Contact"



// import Navigationbar from './pages/components/navbar';



    export default class Main extends Component {
      render() {
        return (
<Provider store={store}>

<Router>
    <div>

    {/* <Welcome/> */}
<Switch>
      {/* <Route path="/" component={Welcome} /> */}
      <Route path="/Welcome" component={Welcome} />
      <Route path="/AdminPanel" component={AdminPanel} />
      <Route path="/contact" component={Contact} />
      <Route path="/product" component={Welcome} />
      <Route path="/" component={Welcome} />
      </Switch>
    </div>
  </Router>


</Provider>       
        );
      }
    }
