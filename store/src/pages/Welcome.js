import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Products from "./components/Products"


class Welcome extends Component {

componentWillMount(){

    //this.props.fetchcontacts();
    // this.props.fetchalldata('none','none');
    
}

    render() {
        return (

<div>
            <Header/>
            <NavBar/>
            <Products/>
            </div>
);}

}

const mapStateToProps = state => ({
    contacts: state.get.contacts,
    tasks: state.get.tasks,
    supplies: state.get.supplies,
    teams: state.get.teams,
});




 export default connect(mapStateToProps,{})(Welcome);