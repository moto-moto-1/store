import React, { Component } from 'react';
import {connect} from 'react-redux';

// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./Products.css"

class Products extends Component {

  constructor(props) {
    super(props);

    this.state={
      main:this.props.product.Products,
      sub:this.props.product.SubPages,

    }

    
  }

  

// static getDerivedStateFromProps(nextProps, state){
// // console.log(state)
// // console.log("prev state")


// let length
//     if (nextProps.subpage){
//       var subpageIndex=nextProps.subpageurl.substr(nextProps.subpageurl.length -1)-1;
//       length=nextProps.product.SubPages[subpageIndex].Products.length
//       var currentPageURL=nextProps.product.SubPages[subpageIndex].url;
      
//           }

//    else if(!nextProps.subpage) {length=nextProps.product.Products.length
//     var currentPageURL=nextProps.product.url;

//    }
//    console.log("current page in state is "+currentPageURL)

//     let cartarray=[];
//     for(let i=0;i<length;i++){     
//      cartarray.push({QuantityAvailable:10,QuantityToAdd:1,TotalQuantity:0,SubtotalPrice:0,NumberOfUnitsDisplay:"none",SubTotalDisplay:"none"})
//     }
//     console.log(state)
//     console.log(nextProps.subpageurl)
//     console.log(state.currentPageURL)
//     console.log(nextProps.product.url)

//     if(state!=undefined && (nextProps.subpageurl==state.currentPageURL || nextProps.product.url==state.currentPageURL))
//     return;
//      else return {cart: cartarray,currentPageURL:currentPageURL};
     



//   }



componentWillMount(){
  
  // console.log(this.props.subpage)
  // console.log("is this a subpage")
  // console.log(this.props.subpageurl.substr(this.props.subpageurl.length -2))
  // console.log("is this a subpageurl")
  //this.props.fetchcontacts();
  // this.props.fetchalldata('none','none');
    
}

numberofunitsChange(e,index,page,subpageindex){

  if(page=="sub"){
    const cartArray=this.state.sub;
    cartArray[subpageindex].Products[index].cart.QuantityToAdd=e.target.value;
    this.setState({cart:[...cartArray]})
  }
  else if(page=="main"){
    const cartArray=this.state.main;
     cartArray[index].cart.QuantityToAdd=e.target.value;
     this.setState({cart:[...cartArray]})
  }

  
}

calculatesubtotal(index,price,page,subpageindex){

  if(page=="sub"){
    const cartArray=this.state.sub;
    const total=cartArray[subpageindex].Products[index].cart.QuantityToAdd*price;
    cartArray[subpageindex].Products[index].cart.SubTotal=total;
    this.setState({main: cartArray})
    return total;
  }
  else if(page=="main"){
   const cartArray=this.state.main;
   const total=cartArray[index].cart.QuantityToAdd*price;
   cartArray[index].cart.SubTotal=total;
   this.setState({main: cartArray})
   return total;
   }
   

   

}

AddToCart(index,page,subpageindex){
  console.log(page)


  if(page=="sub"){
    const cartArray=this.state.sub;
    cartArray[subpageindex].Products[index].cart.QuantityToAddDisplay="block";
    cartArray[subpageindex].Products[index].cart.SubTotalDisplay="block";
    // console.log(this.state.main)

    this.setState({sub:[...cartArray]})

  }
  else if(page=="main"){
    const cartArray=this.state.main;
    cartArray[index].cart.QuantityToAddDisplay="block";
    cartArray[index].cart.SubTotalDisplay="block";
    console.log(this.state.sub)

    this.setState({main:[...cartArray]})
    
  }

  // const cartArray=this.state.cart;
  // cartArray[index].NumberOfUnitsDisplay="block";
  // cartArray[index].SubTotalDisplay="block";

  // this.setState({cart:[...cartArray]})

  // console.log(cartArray[index].SubtotalPrice)

}

    render() {
      if (this.props.subpage){
        var subpageIndex=this.props.subpageurl.substr(this.props.subpageurl.length -1)-1;
        var commonprops=this.props.product.SubPages[subpageIndex].Products;
        var pageName=this.props.product.SubPages[subpageIndex].PageName;

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
       
       <div class="QuantityAvailable">Quantity available: {this.state.sub[subpageIndex].Products[index].cart.QuantityAvailable}</div>
       <input style={{display:this.state.sub[subpageIndex].Products[index].cart.QuantityToAddDisplay}} onChange={(e)=>this.numberofunitsChange(e,index,"sub",subpageIndex)} class="numberofunits" type="number" value={this.state.sub[subpageIndex].Products[index].cart.QuantityToAdd}></input>
       <button onClick={()=>this.AddToCart(index,"sub",subpageIndex)} class="AddToCart">Add to cart</button>
       <div style={{display:this.state.sub[subpageIndex].Products[index].cart.SubTotalDisplay}} class="subtotal" type="number">Subtotal:{this.state.sub[subpageIndex].Products[index].cart.QuantityToAdd}*{product.price}={()=>this.calculatesubtotal(index,product.price,"sub",subpageIndex)}</div>
 
     </div> 
     <div class="MoreInfo"><a href="#">More...</a></div>
   </div>
 )}
 
 </div>
 </div>
 
         
 );

        
            }

      else{
        var commonprops=this.props.product.Products;
        var pageName=this.props.product.PageName;

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
       <input style={{display:product.cart.QuantityToAddDisplay}} onChange={(e)=>this.numberofunitsChange(e,index,"main")} class="numberofunits" type="number" value={product.cart.QuantityToAdd}></input>
       <button onClick={()=>this.AddToCart(index,"main")} class="AddToCart">Add to cart</button>
       <div style={{display:product.cart.SubTotalDisplay}} class="subtotal" type="number">Subtotal:{product.cart.QuantityToAdd}*{product.price}={()=>this.calculatesubtotal(index,product.price,"main")}</div>
 
     </div> 
     <div class="MoreInfo"><a href="#">More...</a></div>
   </div>
 )}
 
 </div>
 </div>
 
         
 );

      }
        


}

}

const mapStateToProps = state => ({
    product: state.submit.pages.products,
    
    
});




 export default connect(mapStateToProps,{})(Products);