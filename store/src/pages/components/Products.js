import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changePageConfiguration} from "../../actions/submitaction"
import Loader from "../Social media Icons/loader.gif";

// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./Products.css"

class Products extends Component {

  constructor(props) {
    super(props);

    

    this.state={
      main:this.props.product.Products,
      sub:this.props.product.SubPages,
      cart:this.props.cart,

    }

    
  }



componentWillMount(){

  

  //return <img src={Loader}></img> ;
 
}

numberofunitsChange(e,index,page,subpageindex){

  if(page=="sub"){
    const cartArray=this.state.sub;
    cartArray[subpageindex].Products[index].cart.QuantityToAdd=e.target.value;
    cartArray[subpageindex].Products[index].cart.SubTotal=cartArray[subpageindex].Products[index].price*cartArray[subpageindex].Products[index].cart.QuantityToAdd
    this.setState({cart:{...this.state.cart,sub:cartArray}})

  }
  else if(page=="main"){
    const cartArray=this.state.main;
     cartArray[index].cart.QuantityToAdd=e.target.value;
     cartArray[index].cart.SubTotal=cartArray[index].price*cartArray[index].cart.QuantityToAdd
     this.setState({cart:{...this.state.cart,main:cartArray}})
     
  }
  this.UpdateCartPage();

}

UpdateCartPage(){

  let totalprice=0;
  let totalquantity=0;
  this.props.product.Products.map( product =>{
    if(product.cart.SubTotal!=0) {
      totalquantity+=Number(product.cart.QuantityToAdd);
    totalprice+=Number(product.cart.SubTotal);}
  }
  )

  this.props.product.SubPages.map( product =>

    product.Products.map( product =>{
      if(product.cart.SubTotal!=0) {
      totalquantity+=Number(product.cart.QuantityToAdd)
      totalprice+=Number(product.cart.SubTotal)}
    }
    
    )
  )
  let cartstate=this.state.cart
  cartstate.PriceTotal=totalprice
  cartstate.TotalItems=totalquantity
  //this.setState({cart:cartstate})

  this.props.changePageConfiguration("cart",cartstate)

}

AddToCart(index,page,subpageindex){
  

  if(page=="sub"){
    const cartArray=this.state.sub;
    cartArray[subpageindex].Products[index].cart.QuantityToAddDisplay="block";
    cartArray[subpageindex].Products[index].cart.SubTotalDisplay="block";
    cartArray[subpageindex].Products[index].cart.SubTotal=cartArray[subpageindex].Products[index].price*cartArray[subpageindex].Products[index].cart.QuantityToAdd
    this.setState({sub:[...cartArray]})
    
  }
  else if(page=="main"){
    const cartArray=this.state.main;
    cartArray[index].cart.QuantityToAddDisplay="block";
    cartArray[index].cart.SubTotalDisplay="block";
    cartArray[index].cart.SubTotal=cartArray[index].price*cartArray[index].cart.QuantityToAdd
  this.setState({main:[...cartArray]})
  
  }
  this.UpdateCartPage();

}

    render() {
      
      if (this.props.subpage){
        var subpageIndex=this.props.subpageurl.substr(this.props.subpageurl.length -1)-1;
        var commonprops=this.props.product.SubPages[subpageIndex].Products;
        var pageName=this.props.product.SubPages[subpageIndex].PageName;
        var Stateproperty="sub"}

        else if (!this.props.subpage){
          var commonprops=this.props.product.Products;
          var pageName=this.props.product.PageName;
          var Stateproperty="main"}

        return (
          <div> <h2 style={{textAlign:"right"}}>{pageName}</h2>    
 <div class="productswrapper">
 
 {commonprops.map((product,index)=>
   
   <div key={index} class="product">
 
     <div class="ProductImageArea">
       <img src={product.image} alt="fashion" id="productimage"/>
     </div>
 
     <div id="descriptiondata">
       <div class="ProductName">{product.ProductName}</div>
       <div class="ProductDetails">{product.description}</div>
       <div class="ProductPrice">Price: {product.price}</div>
       
       <div class="QuantityAvailable">Quantity available: {product.cart.QuantityAvailable}</div>
       <input style={{display:product.cart.QuantityToAddDisplay}} onChange={(e)=>this.numberofunitsChange(e,index,Stateproperty,subpageIndex)} class="numberofunits" type="number"  min="0" value={product.cart.QuantityToAdd}></input>
       <button onClick={()=>this.AddToCart(index,Stateproperty,subpageIndex)} class="AddToCart">Add to cart</button>
       <div style={{display:product.cart.SubTotalDisplay}} class="subtotal" type="number">Subtotal:{product.cart.QuantityToAdd}*{product.price}={product.cart.SubTotal}</div>
       <div class="MoreInfos"><a href="#">More...</a></div>
     </div> 
     
   </div>
 )}
 
 </div>
 </div>
 
         
 );

}

}

const mapStateToProps = state => ({
    product: state.submit.pages.products,
    cart: state.submit.pages.cart
    
});

 export default connect(mapStateToProps,{changePageConfiguration})(Products);