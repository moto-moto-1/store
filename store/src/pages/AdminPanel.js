import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Products from "./components/Products"
import InputLine from "./components/InputLine"


class AdminPanel extends Component {

componentWillMount(){

    //this.props.fetchcontacts();
    // this.props.fetchalldata('none','none');
    
}

    render() {
        return (

<div>
           

           <NavBar/>

          

           <h1>Panel</h1>
           <InputLine header ="أسم الموقع" placeholder="فاشون تكس" type="textarea" data="here"/>
           <InputLine header ="أسم الموقع" placeholder="فاشون تكس" type="textarea" data="here"/>


            </div>
);}

}

const mapStateToProps = state => ({
    products: state.get.products,
    pages: state.get.pages,
    requests: state.get.requests,
    
});




 export default connect(mapStateToProps,{})(AdminPanel);