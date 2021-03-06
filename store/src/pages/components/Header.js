import React, { Component } from 'react';
import {connect} from 'react-redux';

// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./Header.css"
import Loader from "../Social media Icons/loader.gif";


class Header extends Component {


    constructor(props) {
        super(props);
        // this.dropdownhandler = this.dropdownhandler.bind(this);

        this.state={Imageloaded:false}

        if(this.props.header.style.direction=="right")this.title_styles={right:"2%"}
        else this.title_styles={left:"2%"};

        this.title_styles={...this.title_styles,
            color:this.props.header.style.color,
            fontSize:this.props.header.style.font_size }
      
    
            
      }

componentWillMount(){
    // this.setState({Imageloaded:false})
   }
componentDidMount(){
    // this.setState({Imageloaded:true})
}

 
    render() {

//         if(!this.state.Imageloaded){return(
// <div id="header" style={{height:this.props.header.style.height}}> 
//         <img src={Loader} alt="fashion" id="headerimage"/>
//         </div>)
//         }else
      

        return (

<div id="header" style={{height:this.props.header.style.height}}> 
        <img src={this.props.header.image} alt="fashion" id="headerimage"/>
    <h1 id="imagetitle" style={this.title_styles}>{this.props.header.name}</h1>
    
    
    </div>
        
);

}

}

const mapStateToProps = state => ({
    header: state.submit.Header,
    
});




 export default connect(mapStateToProps,{})(Header);