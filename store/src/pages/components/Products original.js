import React, { Component } from 'react';
import {connect} from 'react-redux';

// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./Products.css"

class Products extends Component {

  constructor(props) {
    super(props);

    this.state={
      currentPageURL: null,
      cart : [{QuantityAvailable:10,QuantityToAdd:1,TotalQuantity:0,SubtotalPrice:0,NumberOfUnitsDisplay:"none",SubTotalDisplay:"none"},
      {QuantityAvailable:10,QuantityToAdd:1,TotalQuantity:0,SubtotalPrice:0,NumberOfUnitsDisplay:"none",SubTotalDisplay:"none"},
      {QuantityAvailable:10,QuantityToAdd:1,TotalQuantity:0,SubtotalPrice:0,NumberOfUnitsDisplay:"none",SubTotalDisplay:"none"},
      {QuantityAvailable:10,QuantityToAdd:1,TotalQuantity:0,SubtotalPrice:0,NumberOfUnitsDisplay:"none",SubTotalDisplay:"none"},
      {QuantityAvailable:10,QuantityToAdd:1,TotalQuantity:0,SubtotalPrice:0,NumberOfUnitsDisplay:"none",SubTotalDisplay:"none"},
      {QuantityAvailable:10,QuantityToAdd:1,TotalQuantity:0,SubtotalPrice:0,NumberOfUnitsDisplay:"none",SubTotalDisplay:"none"},
      {QuantityAvailable:10,QuantityToAdd:1,TotalQuantity:0,SubtotalPrice:0,NumberOfUnitsDisplay:"none",SubTotalDisplay:"none"},
      {QuantityAvailable:10,QuantityToAdd:1,TotalQuantity:0,SubtotalPrice:0,NumberOfUnitsDisplay:"none",SubTotalDisplay:"none"},
    ]
    }

    
  }

  

static getDerivedStateFromProps(nextProps, state){
// console.log(state)
// console.log("prev state")


let length
    if (nextProps.subpage){
      var subpageIndex=nextProps.subpageurl.substr(nextProps.subpageurl.length -1)-1;
      length=nextProps.product.SubPages[subpageIndex].Products.length
      var currentPageURL=nextProps.product.SubPages[subpageIndex].url;
      
          }

   else if(!nextProps.subpage) {length=nextProps.product.Products.length
    var currentPageURL=nextProps.product.url;

   }
   console.log("current page in state is "+currentPageURL)

    let cartarray=[];
    for(let i=0;i<length;i++){     
     cartarray.push({QuantityAvailable:10,QuantityToAdd:1,TotalQuantity:0,SubtotalPrice:0,NumberOfUnitsDisplay:"none",SubTotalDisplay:"none"})
    }
    console.log(state)
    console.log(nextProps.subpageurl)
    console.log(state.currentPageURL)
    console.log(nextProps.product.url)

    if(state!=undefined && (nextProps.subpageurl==state.currentPageURL || nextProps.product.url==state.currentPageURL))
    return;
     else return {cart: cartarray,currentPageURL:currentPageURL};
     



  }

componentWillMount(){
  
  // console.log(this.props.subpage)
  // console.log("is this a subpage")
  // console.log(this.props.subpageurl.substr(this.props.subpageurl.length -2))
  // console.log("is this a subpageurl")
  //this.props.fetchcontacts();
  // this.props.fetchalldata('none','none');
    
}

numberofunitsChange(e,index){
  const cartArray=this.state.cart;
  cartArray[index].QuantityToAdd=e.target.value;
  this.setState({cart:[...cartArray]})
}

calculatesubtotal(index,price){
  const cartArray=this.state.cart;

  return price*cartArray[index].QuantityToAdd;

}

AddToCart(index){

  const cartArray=this.state.cart;
  cartArray[index].NumberOfUnitsDisplay="block";
  cartArray[index].SubTotalDisplay="block";

  this.setState({cart:[...cartArray]})

  console.log(cartArray[index].SubtotalPrice)

}

    render() {
      if (this.props.subpage){
        var subpageIndex=this.props.subpageurl.substr(this.props.subpageurl.length -1)-1;
        var commonprops=this.props.product.SubPages[subpageIndex].Products;
        var pageName=this.props.product.SubPages[subpageIndex].PageName;
            }

      else{
        var commonprops=this.props.product.Products;
        var pageName=this.props.product.PageName;

      }
        
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
      
      <div class="QuantityAvailable">Quantity available: {product.QuantityAvailable}</div>
      <input style={{display:this.state.cart[index].NumberOfUnitsDisplay}} onChange={(e)=>this.numberofunitsChange(e,index)} class="numberofunits" type="number" value={this.state.cart[index].QuantityToAdd}></input>
      <button onClick={()=>this.AddToCart(index,product.price)} class="AddToCart">Add to cart</button>
      <div style={{display:this.state.cart[index].SubTotalDisplay}} class="subtotal" type="number">Subtotal:{this.state.cart[index].QuantityToAdd}*{product.price}={this.calculatesubtotal(index,product.price)}</div>

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




 export default connect(mapStateToProps,{})(Products);