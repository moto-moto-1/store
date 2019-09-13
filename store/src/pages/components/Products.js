import React, { Component } from 'react';
import {connect} from 'react-redux';

// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./Products.css"

class Products extends Component {

componentWillMount(){

    //this.props.fetchcontacts();
    // this.props.fetchalldata('none','none');
    
}

    render() {
        return (
            
<div class="productswrapper">

{this.props.products.map(product=>
  
    <div key={product.ProductId} class="product">

      <div class="ProductImageArea">
        <img src={product.image} alt="fashion" id="productimage"/>
      </div>

      <div id="descriptiondata">
        <div class="ProductName">{product.ProductName}</div>
        <div class="ProductDetails">{product.description}</div>
        <div class="ProductPrice">Price: {product.price}</div>
      </div> 

    </div>
 )}

</div>


        
);

}

}

const mapStateToProps = state => ({
    products: state.get.pages.products,
    
    
});




 export default connect(mapStateToProps,{})(Products);