import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Products from "./components/Products"
import InputLine from "./components/InputLine"
import PropTypes from 'prop-types';
import PageListItem from "./components/PageListItem"

import {changecontrolpage} from "../actions/submitaction"

import "./AdminPanel.css"


class AdminPanel extends Component {

    constructor(props) {
        super(props);

        //this.state = {activeMainPage:"products"}
}

 listSubPages=(mainpage) =>{
  
    if(mainpage=="products" ){
       return <div><h1 style={{textAlign:"right"}}>الصفحات الفرعية</h1>
        <div class="mainPagesContainer">
{this.props.pages.products.SubPages.map(page => 
<PageListItem page={page} control={this.props.control} />
 )}
      </div></div>
    }

    else if( mainpage=="services"){
        return <div><h1 style={{textAlign:"right"}}>الصفحات الفرعية</h1>
          <div class="mainPagesContainer">
 {this.props.pages.services.SubPages.map(page => 
 <PageListItem page={page} control={this.props.control} />
  )}
       </div></div>
 
     }
    
    else return;

}
  
    pageClicked(pageurl) {
       // this.listSubPages(pageurl);
if (pageurl.includes("/")){this.props.changecontrolpage("submit_new_activsubepage",pageurl);}
else this.props.changecontrolpage("submit_new_activepage",pageurl);
        
    }

    setActivedisplay = (x,y) => {
        //  console.log("the active page "+x.url + " , "+ y + " , " + x.exists)
         
        if (x.url==y && x.exists)  {return {color:"white",background:"gray"}; }
       else if(!x.exists){return {display:"none"};}
       
    }

    checkifexist = (obj) =>{ if (obj.exists) {
        return <div
        style={this.setActivedisplay(obj,this.props.control.activePageToControl)}
        class="mainPage" onClick={()=>this.pageClicked(obj.url)}>{obj.PageName} 
        </div>
        }}


// componentWillReceiveProps(nextProps){

//     console.log("inside component receive props");
//     console.log(nextProps);
//     // if(nextProps.mainPagecontrol){
//     //     this.props.mainPagecontrol=nextProps.mainPagecontrol;
//     // }
// }


    render() {
        return (
            

<div>
           

           <NavBar/>

          

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

          


            </div>
);}

}

// AdminPanel.PropTypes = {
//     control: PropTypes.object,
//     pages:   PropTypes.object,
//     changecontrolpage: PropTypes.func.isRequired
// };



const mapStateToProps = state => ({


    // products: state.get.products,
    control: state.submit.pages.control,
//  mainPagecontrol: state.get.pages.control.activePageToControl,

     pages: state.submit.pages,

    // requests: state.get.requests,
    // getDerivedStateFromProps(state){}
    //  ali (){return}

});






 export default connect(mapStateToProps,{changecontrolpage})(AdminPanel);