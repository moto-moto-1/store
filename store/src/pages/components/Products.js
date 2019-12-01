import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changePageConfiguration} from "../../actions/submitaction"
import Loader from "../Social media Icons/loader.gif";

import PopupPage from "./PopupPage"

// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./Products.css"

class Products extends Component {

  constructor(props) {
    super(props);
    this.openDetails=this.openDetails.bind(this);
    this.Optionchosen=this.Optionchosen.bind(this);
    this.OptionSelector=React.createRef();
    

    this.state={
      popupshow:false,
      optionDisplay:"none",
      Itemindex:null,
      SubPageIndex:null,
      products:this.props.product,
      main:this.props.product.Products,
      sub:this.props.product.SubPages,
      cart:this.props.cart,
      lg:this.props.lg[this.props.Header.language]

    }

   

    
  }

  Optionchosen=(issubpage,SubIndex,ProductIndex,e)=>{
    let newLocalState=this.state.products
    // // let newLocalState=this.state.products
    // (issubpage=="main")? newLocalState=this.state.main[ProductIndex]
    // :newLocalState=this.state.sub[SubIndex].Products[ProductIndex]

    if(issubpage=="main"){
    newLocalState.Products[ProductIndex].options.map( (Option,index)=>
    (index==e.target.value)?newLocalState.Products[ProductIndex].options[index].selected=true:newLocalState.Products[ProductIndex].options[index].selected=false
    )
    }else if(issubpage=="sub") {
      newLocalState.SubPages[SubIndex].Products[ProductIndex].options.map( (Option,index)=>
    (index==e.target.value)?newLocalState.SubPages[SubIndex].Products[ProductIndex].options[index].selected=true:newLocalState.SubPages[SubIndex].Products[ProductIndex].options[index].selected=false
    )
    }

 this.setState({products:newLocalState})
  }

  exitsignal=(e)=>{
    this.setState({popupshow:e})
    }

  openDetails(Stateproperty,index){
    this.setState({popupshow:true,Itemindex:index});
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

  
 //(this.state.optionDisplay=="none")?this.setState({optionDisplay:"block"}):this.setState({optionDisplay:"none"})
 
if(page=="sub"){
    const cartArray=this.state.sub;
    cartArray[subpageindex].Products[index].cart.QuantityToAddDisplay="block";
    cartArray[subpageindex].Products[index].cart.SubTotalDisplay="block";
    cartArray[subpageindex].Products[index].cart.SubTotal=cartArray[subpageindex].Products[index].price*cartArray[subpageindex].Products[index].cart.QuantityToAdd
    if(cartArray[subpageindex].Products[index].options.length==1&&cartArray[subpageindex].Products[index].options[0].OptionName==""){}
    else cartArray[subpageindex].Products[index].options[this.OptionSelector.current.value].selected=true
    this.setState({sub:[...cartArray]})
    
  }
  else if(page=="main"){
    const cartArray=this.state.main;
    cartArray[index].cart.QuantityToAddDisplay="block";
    cartArray[index].cart.SubTotalDisplay="block";
    cartArray[index].cart.SubTotal=cartArray[index].price*cartArray[index].cart.QuantityToAdd
    cartArray[index].options[this.OptionSelector.current.value].selected=true

  this.setState({main:[...cartArray]})
  
  }

  this.UpdateCartPage();

}

    render() {
      
      if (this.props.subpage){
        var subpageIndex=this.props.subpageurl.substr(this.props.subpageurl.length -1)-1;
        var commonprops=this.props.product.SubPages[subpageIndex].Products;
        var pageName=this.props.product.SubPages[subpageIndex].PageName;
        var Stateproperty="sub"
        var subpageflag=true}

        else if (!this.props.subpage){
          var commonprops=this.props.product.Products;
          var pageName=this.props.product.PageName;
          var Stateproperty="main"
          var subpageflag=false}

        return (
          <div> <h2 style={{padding:"10px",textAlign: this.props.Header.direction}}>{pageName}</h2>    
 <div class="productswrapper">
 
 {commonprops.map((product,index)=>
   
   <div key={index} class="product" style={{flexDirection: (this.props.Header.direction=="right")?'row-reverse':'row'}}>
 
     <div class="ProductImageArea">
       <img src={product.image} alt="fashion" id="productimage"/>
     </div>
 
     <div id="descriptiondata"  style={{textAlign: this.props.Header.direction}}>
       <div class="ProductName">{product.ProductName}</div>
       <div class="ProductDetails">{product.description}</div>
       {
         (product.options.length==1&&product.options[0].OptionName=="")?"":<div style={{display: "flex",flexDirection: this.props.Header.flxdir}}>
       <select   onChange={(e)=>this.Optionchosen(Stateproperty,subpageIndex,index,e)} ref={this.OptionSelector} style={{display:product.cart.SubTotalDisplay}} >
        {product.options.map((option,optionIndex) =>  <option value={optionIndex}> {option.OptionName}</option>)}
         </select></div>

       }
       <div class="ProductPrice"> {(  this.props.Header.direction=="right")?  product.price+" :"+this.state.lg.pr.prc : this.state.lg.pr.prc+":"+product.price }</div>
       
       {/* <div class="QuantityAvailable">Quantity available: {product.cart.QuantityAvailable}</div> */}
       <input style={{display:product.cart.QuantityToAddDisplay,textAlign:this.props.Header.direction}} onChange={(e)=>this.numberofunitsChange(e,index,Stateproperty,subpageIndex)} class="numberofunits" type="number"  min="0" value={product.cart.QuantityToAdd}></input>
       <button onClick={()=>this.AddToCart(index,Stateproperty,subpageIndex)} class="AddToCart">{this.state.lg.pr.crtBtn}</button>
       
       

       <div style={{display:product.cart.SubTotalDisplay}} class="subtotal" type="number">
       {(this.props.Header.direction=="right")?  
           product.cart.SubTotal +"="+product.price +"*"+product.cart.QuantityToAdd+" :" +this.state.lg.pr.sbtl
         : this.state.lg.pr.sbtl+":"+product.cart.QuantityToAdd+"*"+product.price+"="+product.cart.SubTotal
          }</div>
 <div class="MoreInfos" onClick={()=>this.openDetails(Stateproperty,index)}><a href="#">{this.state.lg.pr.mr}</a></div>
       
     </div> 
     
   </div>
 )}
 
 </div>
 {(this.state.popupshow)?<PopupPage subpageflag={subpageflag} subpageindex={subpageIndex} itemindex={this.state.Itemindex} type="products" show="detail" exitsignal={this.exitsignal}/>:""}

 </div>
 
         
 );

}

}

const mapStateToProps = state => ({
    product: state.submit.pages.products,
    cart: state.submit.pages.cart,
    Header: state.submit.Header.style,
    lg:state.submit.languages
    
});

 export default connect(mapStateToProps,{changePageConfiguration})(Products);