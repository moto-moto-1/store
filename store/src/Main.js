import React, { Component } from 'react';

import {Provider} from 'react-redux';
import store from './store';
import Welcome   from "./pages/Welcome"


// import Navigationbar from './pages/components/navbar';



    export default class Main extends Component {
      render() {
        return (
<Provider store={store}>



<Welcome/>
</Provider>       
        );
      }
    }
