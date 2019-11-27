import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changePageConfiguration} from "../actions/submitaction"



import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
//import Loader from "../Social media Icons/loader.gif";

// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./Cart.css"

class Cart extends Component {

  constructor(props) {
    super(props);
    this.selectorRef = React.createRef();
    
    

    this.state={
      products:this.props.product,
      services:this.props.service,
      cart: this.props.cart,

    }

    
  }

  UpdateCartPage(){

    let totalprice=0;
    let totalquantity=0;
    this.props.product.Products.map( product =>{
      if(product.cart.SubTotal!=0) {
        totalquantity+=Number(product.cart.QuantityToAdd);
        totalprice+=Number(product.cart.QuantityToAdd)*Number(product.price);
      }
    }
    )
  
    this.props.product.SubPages.map( product =>
  
      product.Products.map( product =>{
        if(product.cart.SubTotal!=0) {
        totalquantity+=Number(product.cart.QuantityToAdd)
        totalprice+=Number(product.cart.QuantityToAdd)*Number(product.price)}
      }
      
      )
    )
    let cartstate=this.state.cart
    cartstate.PriceTotal=totalprice
    cartstate.TotalItems=totalquantity
    console.log("price total is")
    console.log(totalprice)
    //this.setState({cart:cartstate})
  
    this.props.changePageConfiguration("cart",cartstate)
  
  }
  


  paymentchanged=(e)=>{
    let newcart=this.state.cart;
    newcart.PaymentMethodSelected=e.target.value;
    this.setState({cart:newcart})
  }
  
  order=(e)=>{
    
    let newcart=this.state.cart;
    newcart.PaymentMethodSelected=this.selectorRef.current.value;
    this.setState({cart:newcart})
  }

  quantity(event,productindex,pageindex){
    let products=this.state.products;
    if(pageindex==null){      
      products.Products[productindex].cart.QuantityToAdd=event.target.value
      products.Products[productindex].cart.SubTotal=event.target.value*products.Products[productindex].price

    }
    else{      
      products.SubPages[pageindex].Products[productindex].cart.QuantityToAdd=event.target.value
      products.SubPages[pageindex].Products[productindex].cart.SubTotal=event.target.value*products.SubPages[pageindex].Products[productindex].price
    }
    this.props.changePageConfiguration("products",products)
    this.UpdateCartPage()

  }

  

componentWillMount(){

  

  //return <img src={Loader}></img> ;
 
}


    render() {
      
     return (
            
          <div> 
              <Header />
            <NavBar />
              
              <h2 style={{textAlign:"right"}}>{this.state.cart.PageName}</h2>   
              
 <div class="cartproductswrapper">
 
 {this.props.product.Products.map((product,productIndex)=>
 { if(product.cart.SubTotal>0 || product.cart.QuantityToAdd=="" )
    
  return <div style={{margin:"7px"}}>{product.ProductName+" | "} Option: {product.options.map(option=>(option.selected)?option.OptionName:null)} | 
   Quantity:<input onChange={(e)=>this.quantity(e,productIndex,null)} value={product.cart.QuantityToAdd}></input> | Sub total: {product.cart.SubTotal}</div> 

 }
 )}

{this.props.product.SubPages.map( (product,pageIndex) =>

product.Products.map( (product,productIndex) =>{
    { if(product.cart.SubTotal!=0)
    
        return <div style={{margin:"7px"}}>{product.ProductName+" | "} Option: {product.options.map(option=>(option.selected)?option.OptionName:null)} | 
         Quantity:<input onChange={(e)=>this.quantity(e,productIndex,pageIndex)}  value={product.cart.QuantityToAdd}></input> | Sub total: {product.cart.SubTotal}</div> 
      
       }

})

)
}

{
  (this.state.cart.PriceTotal==0) ? <h3  style={{textAlign:"right"}}>لا توجد مشتريات</h3>
:  <div>
  
  <div style={{margin:"7px"}}>Total Price: {this.state.cart.PriceTotal} Total Items:{this.state.cart.TotalItems} </div>
Payment Option : <select style={{margin:"7px"}} onChange={this.paymentchanged} ref={this.selectorRef} >
{this.props.cart.PaymentMethodOptions.map(option => 
(option.exists)? <option value={option.Type}> {option.Name}</option>:null
 )}
 </select>
 <br></br>
 <button style={{margin:"7px"}} onClick={this.order}>Order</button>
 <br></br>
</div>

 

}


 </div>
 

 <Footer/>
 </div>
 
         
 );

}

}

const mapStateToProps = state => ({
    product: state.submit.pages.products,
    service: state.submit.pages.services,
    cart: state.submit.pages.cart,
});

 export default connect(mapStateToProps,{changePageConfiguration})(Cart);