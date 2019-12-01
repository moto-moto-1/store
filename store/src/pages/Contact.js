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
           <h1  style={this.state.LinesStyle}>{this.props.contact.HeaderTitle}</h1>


<div>
<p class="contacttag" style={this.state.LinesStyle}><spane class="tag"> {this.state.lg.cnct.tl} </spane>{this.props.contact.Telephone}</p>
<p class="contacttag" style={this.state.LinesStyle}><spane class="tag"> {this.state.lg.cnct.ml} </spane>{this.props.contact.email}</p>
<br></br>
<p class="contacttag" style={this.state.LinesStyle}><spane class="tag"> {this.state.lg.cnct.brn} </spane></p>

{
    this.props.branchs.map( branch =>
<p class="contacttag" style={this.state.LinesStyle}><spane style={this.state.LinesStyle}> <div class="tag" >{this.state.lg.cnct.brnAdd}</div><div> {branch.BranchName}</div><div> {branch.BranchLocation}</div> </spane></p>
    )
}




</div>



<Footer/>
            </div>
);}

}

const mapStateToProps = state => ({
    
    contact: state.submit.pages.contact,
    branchs: state.submit.pages.contact.branchs,
    lg:state.submit.languages,
    Header:state.submit.Header.style
    
});




 export default connect(mapStateToProps,{})(Contact);