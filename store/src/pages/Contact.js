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
import "./contact.css"

class Contact extends Component {

componentWillMount(){

    //this.props.fetchcontacts();
    // this.props.fetchalldata('none','none');
    
}

    render() {
        return (

<div>

<Header/>
            <NavBar/>
           <h1>{this.props.contact.HeaderTitle}</h1>


<div>
<p class="contacttag"><spane class="tag">Telephone: </spane>{this.props.contact.Telephone}</p>
<p class="contacttag"><spane class="tag">E-Mail: </spane>{this.props.contact.email}</p>
<br></br>
<p class="contacttag"><spane class="tag">Branchs </spane></p>

{
    this.props.branchs.map( branch =>
<p class="contacttag"><spane class="tag">{branch.BranchName} Branch address: </spane>{branch.BranchLocation}</p>
    )
}




</div>



<Footer/>
            </div>
);}

}

const mapStateToProps = state => ({
    
    contact: state.get.pages.contact,
    branchs: state.get.pages.contact.branchs,
    
});




 export default connect(mapStateToProps,{})(Contact);