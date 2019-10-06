import React, { Component } from 'react';
import {connect} from 'react-redux';

// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./Services.css"

class Services extends Component {

  constructor(props) {
    super(props);


    
  }

componentWillMount(){
  
  // console.log(this.props.subpage)
  // console.log("is this a subpage")

  // console.log(this.props.subpageurl.substr(this.props.subpageurl.length -2))
  // console.log("is this a subpageurl")


    //this.props.fetchcontacts();
    // this.props.fetchalldata('none','none');
    
}

    render() {
      if (this.props.subpage){
        var subpageIndex=this.props.subpageurl.substr(this.props.subpageurl.length -1)-1;
            }

      if(!this.props.subpage)
        return (
            
<div class="productswrapper">

{this.props.service.Services.map(product=>
  
  <div key={product.ServiceId} class="product">

    <div class="ProductImageArea">
      <img src={product.image} alt="fashion" id="productimage"/>
    </div>

    <div id="descriptiondata">
      <div class="ProductName">{product.ServiceName}</div>
      <div class="ProductDetails">{product.description}</div>
      <div class="ProductPrice">Price: {product.price}</div>
      
    </div> 
    <div class="MoreInfo"><a href="#">Reserve appointment...</a></div>
  </div>
)}

</div>


        
);

else return (
            
  <div class="productswrapper">
  
  {this.props.service.SubPages[subpageIndex].Services.map(product=>
    
    <div key={product.ServiceId} class="product">
  
      <div class="ProductImageArea">
        <img src={product.image} alt="fashion" id="productimage"/>
      </div>
  
      <div id="descriptiondata">
        <div class="ProductName">{product.ServiceName}</div>
        <div class="ProductDetails">{product.description}</div>
        <div class="ProductPrice">Price: {product.price}</div>
        
      </div> 
      <div class="MoreInfo"><a href="#">Reserve appointment...</a></div>
    </div>
  )}
  
  </div>
  
  
          
  ) ;

}

}

const mapStateToProps = state => ({
    service: state.submit.pages.services,
    
    
});




 export default connect(mapStateToProps,{})(Services);