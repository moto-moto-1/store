import React, { Component } from 'react';
import {connect} from 'react-redux';

// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./Header.css"

class Header extends Component {

componentWillMount(){

    //this.props.fetchcontacts();
    // this.props.fetchalldata('none','none');
    
}

    render() {
        return (

<div id="header"> 
        <img src={this.props.header.image} alt="fashion" id="headerimage"/>
    <h1 id="imagetitle">{this.props.header.name}</h1>
    
    </div>
        
);

}

}

const mapStateToProps = state => ({
    header: state.get.Header,
    
});




 export default connect(mapStateToProps,{})(Header);