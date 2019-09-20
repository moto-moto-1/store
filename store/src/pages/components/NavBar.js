import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'


// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./NavBar.css"

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true, dropdownclick:"\u02C5",
         dropdowndisplay:"none;"
        };

    
            
      }
     

componentWillMount(){

    //this.props.fetchcontacts();
    // this.props.fetchalldata('none','none');
    
}

dropdownhandler = (e) => {
    e.newprop="none";
    console.log(e);
}

handleButtonClick = (e) =>{
    e.preventDefault();

    if(this.state.dropdownclick=="\u02C5"){this.setState({dropdownclick:'\u02C4'})}
    else if(this.state.dropdownclick=="\u02C4"){this.setState({dropdownclick:'\u02C5'})}
    
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

    
    <div className="navbutton"  onClick={this.handleButtonClick}>{this.state.dropdownclick}</div>

</div>

{this.props.navbarpages.map(page=>
    <div className="navitems" onClick={this.dropdownhandler}  style={{display:this.state.isToggleOn}}>
        {/* <a href={"/"+this.translateToEnglish(page)}> {page}  </a> */}
        <Link  to={"/"+this.translateToEnglish(page.main)}> {page.main} </Link>
        

        <div style={{"display" : this.state.dropdowndisplay}} class="dropdown_content">
           { page.sub.map( (sub,indexx) =>
               <Link  to={"/"+ this.translateToEnglish(sub)}> {sub} </Link>
               
             )}
        
            </div>



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