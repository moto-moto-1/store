import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'


// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./NavBar.css"

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
            
      }
     

componentWillMount(){

    //this.props.fetchcontacts();
    // this.props.fetchalldata('none','none');
    
}

handleButtonClick = (e) =>{
    e.preventDefault();
    
    if(this.state.isToggleOn=='none'){this.setState({isToggleOn:'block'})}
    if(this.state.isToggleOn=='block'){this.setState({isToggleOn:'none'})}
    if(this.state.isToggleOn==true){this.setState({isToggleOn:'block'})}
   
}

translateToEnglish = (name) =>{

    switch (name) {
        case 'منتجات':
          return "products";  
            break;
        case 'خدمات':
          return "services";  
            break;
        case 'أتصال':
          return "contact";  
            break;
        case 'من نحن':
          return "about us";  
            break;
        
    
        default:
            break;
    }

}



    render() {


     


        return (

<div className="navigationbar">

<div className="navmainitem">
   <a href="#"> {this.props.header.name}  </a>       

    
    <div className="navbutton"  onClick={this.handleButtonClick}>=</div>

</div>

{this.props.navbarpages.map(page=>
    <div className="navitems" style={{display:this.state.isToggleOn}}>
        {/* <a href={"/"+this.translateToEnglish(page)}> {page}  </a> */}
        <Link to={"/"+this.translateToEnglish(page)}> {page} </Link>
        </div>
    )}

  

</div>
        
);

}

}

const mapStateToProps = state => ({
    navbarpages: state.get.NavigationBar.pages,
    navbarstyle: state.get.NavigationBar.style,
    header: state.get.Header,
    
});




 export default connect(mapStateToProps,{})(NavBar);