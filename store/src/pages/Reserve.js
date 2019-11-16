import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changePageConfiguration} from "../actions/submitaction"



import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
//import Loader from "../Social media Icons/loader.gif";

// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./Reserve.css"

class Reserve extends Component {

  constructor(props) {
    super(props);

    
    

    this.state={
      products:this.props.product,
      services:this.props.service,
      cart: this.props.cart,
      reserve: this.props.reserve,

    }

    
  }

  

componentWillMount(){

  

  //return <img src={Loader}></img> ;
 
}


    render() {
      var moment=require('moment')
      
     return (
            
          <div> 
              <Header />
            <NavBar />
              
              <h2 style={{textAlign:"right"}}>{this.state.reserve.PageName}</h2>   
              <input type="date" min={moment().format('YYYY-MM-DD')} value={moment().format('YYYY-MM-DD')}></input>
 
 <Footer/>
 </div>
 
         
 );

}

}

const mapStateToProps = state => ({
    product: state.submit.pages.products,
    service: state.submit.pages.services,
    cart: state.submit.pages.cart,
    reserve: state.submit.pages.reserve
});

 export default connect(mapStateToProps,{changePageConfiguration})(Reserve);