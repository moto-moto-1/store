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
      cart:{main:[],sub:this.props.product.SubPages, total:[] },

    }

   this.setstatecartvalues();
    
  }

  setstatecartvalues(){
//const nev=this.state.sub
    this.setState({cart:{...this.state.cart,sub:"hi"}})
    console.log(this.state)
    const cartarray=this.state.cart.sub
    //console.log(this.state.length)
    for (let index = 0; index < this.state.sub.length; index++) {
  console.log(this.state)

  cartarray.map( (value,index) =>{
    //cartarray[index].Products=[]
      }
     )
  //nev[index].Products=[]
  console.log(this.state)
  //const element = array[index];
  
}

    
    
    cartarray.map( (value,index) =>{
  cartarray[index].Products=[]
    }
   )
   // this.setState({cart:{...this.state.cart,sub:cartarray}})
      
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
  this.UpdateCartPage(index,page,subpageindex);

}

UpdateCartPage(index,page,subpageindex){


if (this.state.main[index].cart.QuantityToAdd>0 && page=="main")
{
  const existingArray=this.state.cart.main;

 if(existingArray[index]!= "undefined" ||existingArray[index]!= "empty") 
 existingArray[index]=this.state.main[index];
 else existingArray.push(this.state.main[index]);
 this.setState({cart:{...this.state.cart,main:existingArray}})
}

else if (this.state.sub[subpageindex].Products[index].cart.QuantityToAdd>0 && page=="sub"){
  //console.log(this.state.sub[subpageindex].Products[index].cart.QuantityToAdd);


const existingArray=this.state.sub;
if(existingArray[subpageindex].Products[index]!= "undefined" || existingArray[subpageindex].Products[index]!= "empty") 
existingArray[subpageindex].Products[index]=this.state.sub[subpageindex].Products[index];
else existingArray[subpageindex].Products.push(this.state.sub[subpageindex].Products[index]);
this.setState({cart:{...this.state.cart,sub:existingArray}})

}
console.log(this.state.cart);


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
  this.UpdateCartPage(index,page,subpageindex);

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
       <input style={{display:product.cart.QuantityToAddDisplay}} onChange={(e)=>this.numberofunitsChange(e,index,Stateproperty,subpageIndex)} class="numberofunits" type="number" value={product.cart.QuantityToAdd}></input>
       <button onClick={()=>this.AddToCart(index,Stateproperty,subpageIndex)} class="AddToCart">Add to cart</button>
       <div style={{display:product.cart.SubTotalDisplay}} class="subtotal" type="number">Subtotal:{product.cart.QuantityToAdd}*{product.price}={product.cart.SubTotal}</div>
 
     </div> 
     <div class="MoreInfo"><a href="#">More...</a></div>
   </div>
 )}
 
 </div>
 </div>
 
         
 );

}

}

const mapStateToProps = state => ({
    product: state.submit.pages.products,
    
});

 export default connect(mapStateToProps,{changePageConfiguration})(Products);