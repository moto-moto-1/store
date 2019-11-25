import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'


import facebook from "../Social media Icons/facebook2.png";
import Twitter from "../Social media Icons/twitter2.png";
import Instagram from "../Social media Icons/instagram2.png";
import YouTube from "../Social media Icons/youtube2.png";




// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./Footer.css"

class Footer extends Component {


    constructor(props) {
        super(props);
       
    
            
      }

      componentWillMount(){

  
}

 
    render() {

      

        return (

<div id="footer" style={{}}> 

<div class="social">
<a href={this.props.contact.FacebookAccount} class="socialitems"><img class="imageClass" src={facebook} alt="facebook"/></a>
<a href={this.props.contact.TwitterAccount} class="socialitems"><img  class="imageClass" src={Twitter} alt="twitter"/></a>
<a href={this.props.contact.InstagramAccount} class="socialitems"><img  class="imageClass" src={Instagram} alt="instagram"/></a>
<a href={this.props.contact.YoutubeAccount} class="socialitems"><img  class="imageClass" src={YouTube} alt="youtube"/></a>
{/* <img src={twitter} alt="fashion" id="headerimage"/> */}
</div>

<div class="pages">

<div class="pagesitems">
   {this.props.pages.products.SubPages.map( subproduct => 
            <a href={subproduct.productUrl}>{subproduct.PageName}</a>
            )}
    
</div>

<div class="pagesitems">
   {this.props.pages.services.SubPages.map( subservicet => 
            <a href={subservicet.serviceUrl}>{subservicet.PageName}</a>
            )}
    
</div>

<div class="pagesitems">
    <a href="">من نحن</a>
    <a href="">للحجز</a>
    <a href="">سلة المشتريات</a>
</div>
<div class="pagesitems">
    <a href="">الأتصال بنا</a>
    <a href="">الفروع</a>
    <a href="">الخريطة</a>
    <a href="">تسجيل دخول</a>
</div>

</div>
   
    </div>
        
);

}

}

const mapStateToProps = state => ({
    contact: state.submit.pages.contact,
    pages: state.submit.pages

    
});




 export default connect(mapStateToProps,{})(Footer);