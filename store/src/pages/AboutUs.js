import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"


import Facebook from "./Social media Icons/facebook2.png";
import Twitter from "./Social media Icons/twitter2.png";
import Instagram from "./Social media Icons/instagram2.png";
import YouTube from "./Social media Icons/youtube2.png";
import "./AboutUs.css"

class AboutUs extends Component {


    constructor(props) {
        super(props);

    this.state={
            lg:this.props.lg[this.props.Header.language],
            LinesStyle:{display:"flex",flexFlow:"wrap "+this.props.Header.flxdir}
        }

    }

componentWillMount(){

    //this.props.fetchcontacts();
    // this.props.fetchalldata('none','none');
    
}

    render() {
        return (

<div>

<Header/>
            <NavBar/>

            <div  class="aboutcontainer">
            <h1  style={this.state.LinesStyle}>{this.props.about.HeaderTitle}</h1>
           
            <h3  style={this.state.LinesStyle}>{this.props.about.Details}</h3>

            <br></br>
            </div>
<Footer/>
            </div>
);}

}

const mapStateToProps = state => ({
    
    about: state.submit.pages.about,
    branchs: state.submit.pages.contact.branchs,
    lg:state.submit.languages,
    Header:state.submit.Header.style
}); 




 export default connect(mapStateToProps,{})(AboutUs);