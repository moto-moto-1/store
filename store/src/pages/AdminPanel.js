import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Products from "./components/Products"
import InputLine from "./components/InputLine"
import PropTypes from 'prop-types';
import PageListItem from "./components/PageListItem"
import ControlInput from "./components/ControlInput"

import {changecontrolpage} from "../actions/submitaction"

import "./AdminPanel.css"


class AdminPanel extends Component {

    constructor(props) {
        super(props);

        //this.state = {activeMainPage:"products"}
}


loopsubpages = (type) => {

    if(type=="products")
    return this.props.pages.products.SubPages.map(page => 
        <PageListItem page={page} control={this.props.control} />
         )
    else if (type=="services")
    return this.props.pages.services.SubPages.map(page => 
        <PageListItem page={page} control={this.props.control} />
         )

    else return;
}

 listSubPages=(mainpage) =>{
  

    if(mainpage=="products" || mainpage=="services"){
       return <div><h1 style={{textAlign:"right"}}>الصفحات الفرعية</h1>
        <div class="mainPagesContainer">
{this.loopsubpages(mainpage)}
      </div></div>
    }

    else return;

}
  

  

    render() {
        return (
<div>
           <NavBar/>
           <center><h1>{this.props.control.HeaderTitle}</h1></center>
           <h1 style={{textAlign:"right"}}>الصفحات الرئيسية</h1>

 <div class="mainPagesContainer">
           
           <PageListItem page={this.props.pages.products} control={this.props.control} />
           <PageListItem page={this.props.pages.services} control={this.props.control} />
           <PageListItem page={this.props.pages.contact} control={this.props.control} />
           <PageListItem page={this.props.pages.about} control={this.props.control} />
           <PageListItem page={this.props.pages.reserve} control={this.props.control} />
           <PageListItem page={this.props.pages.cart} control={this.props.control} />

           </div> 
          {this.listSubPages(this.props.control.activePageToControl)}


          <ControlInput />


            </div>
);}

}


const mapStateToProps = state => ({


    control: state.submit.pages.control,

     pages: state.submit.pages,

});






 export default connect(mapStateToProps,{changecontrolpage})(AdminPanel);