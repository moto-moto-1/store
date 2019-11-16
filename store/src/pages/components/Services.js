import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
//import {moment} from 'moment'
import 'moment-timezone'

// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./Services.css"

class Services extends Component {

  constructor(props) {
    super(props);
    this.toReservePage=this.toReservePage.bind(this);

    this.state={redirect:false}
    
  }

  toReservePage(isSubPage,SubPageIndex,ItemIndex) {
if(isSubPage){
var servicetoAppointment=this.props.service.SubPages[SubPageIndex].Services[ItemIndex];
}
else {
var servicetoAppointment=this.props.service.Services[ItemIndex];
}
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();


var moment = require('moment');
let m=moment();
alert(m.add(5,'days'))
today = dd + '/' + mm + '/' + yyyy;

for(let i=0;i<=6;i++){          //check if no appointments set in tree
if(servicetoAppointment.Appointments[i].exists){break}
else{   if(i==6){alert("No appointments avilable");return;}
        else continue;}
}

for(let i=0;i<=200;i++){

}


    this.setState({redirect:true})
    
  }

componentWillMount(){
  
  
}

    render() {


      if (this.state.redirect) {
        return <Redirect to='/reserve'/>;
      }

      if (this.props.subpage){
        var subpageIndex=this.props.subpageurl.substr(this.props.subpageurl.length -1)-1;
            }

      if(!this.props.subpage) {var servicesPage=this.props.service;}
      else {var servicesPage=this.props.service.SubPages[subpageIndex];}

        return (
            
<div class="productswrapper">

{servicesPage.Services.map((product,index)=>
  
  <div key={product.ServiceId} class="product">

    <div class="ProductImageArea">
      <img src={product.image} alt="fashion" id="productimage"/>
    </div>

    <div id="descriptiondata">
      <div class="ProductName">{product.ServiceName}</div>
      <div class="ProductDetails">{product.description}</div>
      <div class="ProductPrice">Price: {product.price}</div>
      <br/>
      <div class="MoreInfo"><button onClick={this.toReservePage(this.props.subpage,subpageIndex,index)}>Reserve appointment...</button></div>
    </div> 
    
  </div>
)}

</div>


        
);
}

}

const mapStateToProps = state => ({
    service: state.submit.pages.services,
    
    
});




 export default connect(mapStateToProps,{})(Services);

 