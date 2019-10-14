import React, { Component } from 'react';
import {connect} from 'react-redux';
import PopupPage from "./PopupPage"

import {changecontrolpage} from "../../actions/submitaction"


// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./Item.css"

 class Item extends Component {

    constructor(props) {
        super(props);
this.edititem=this.edititem.bind(this);
this.deleteitem=this.deleteitem.bind(this);
this.additem=this.additem.bind(this);
        
        this.state = {
            popupshow:false,
            Itemindex:null,
            products:this.props.products,
            services:this.props.services,
        }
}

exitsignal=(e)=>{
this.setState({popupshow:e})
}

edititem(index){
    this.setState({popupshow:true,Itemindex:index});
    
}

deleteitem(page,pageindex,index){
    if(page=="products"){
        let localcopy=this.state.products  
        if(pageindex==null){
    localcopy.Products.splice(index,1)
        }

        else{
            localcopy.SubPages[pageindex].Products.splice(index,1)

        }
        this.setState({products:localcopy})
    }
    else if(page=="services"){
        let localcopy=this.state.services  
        if(pageindex==null){
          localcopy.Services.splice(index,1)
        }

        else{
            localcopy.SubPages[pageindex].Services.splice(index,1)
        }
        this.setState({services:localcopy})
    }


}

additem(page,pageindex){

    let emptyProduct={
        "ProductId": 434351,
        "ProductName": "منتج جديد",
        "price": 0,
        "cart": {
          "QuantityAvailable": 0,
          "SubTotal": 0,
          "QuantityToAddDisplay": "none",
          "SubTotalDisplay": "none",
          "QuantityToAdd": 1
        },
        "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
        "description": "لم يتم تحديد الوصف"
      }
    let emptyService={
        "ServiceId": 434351,
        "ServiceName": "خدمة جديدة",
        "price": 0,
        "cart": {
          "QuantityAvailable": 0,
          "SubTotal": 0,
          "QuantityToAddDisplay": "none",
          "SubTotalDisplay": "none",
          "QuantityToAdd": 1
        },
        "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
        "description": "لم يتم تحديد الوصف"
      }

    if(page=="products"){
        let localcopy=this.state.products  
        if(pageindex==null){
localcopy.Products.push(emptyProduct)
        }

        else{
            localcopy.SubPages[pageindex].Products.push(emptyProduct)

        }
        this.setState({products:localcopy})
    }
    else if(page=="services"){
        let localcopy=this.state.services  
        if(pageindex==null){
            localcopy.Services.push(emptyService)
        }

        else{
            localcopy.SubPages[pageindex].Services.push(emptyService)
        }
        this.setState({services:localcopy})
    }
    

}


componentWillMount(){

    //this.props.fetchcontacts();
    // this.props.fetchalldata('none','none');
    
}



    render() {
let subpageindex;
let items;
let type;
let id;
let name;
        if (this.props.control.activePageToControl=="products"){
            type="products"
            id="ProductId"
            name="ProductName"
          if(this.props.control.activeSubpageToControl==""){
            subpageindex=null  
            items=this.state.products.Products
          }
          else{
            subpageindex=this.props.control.activeSubpageToControl.substr(this.props.control.activeSubpageToControl.length -1)-1
            items=this.state.products.SubPages[subpageindex].Products;
            
          }

        }
        else if(this.props.control.activePageToControl=="services"){
            type="services"
            id="ServiceId"
            name="ServiceName"
            if(this.props.control.activeSubpageToControl==""){
                subpageindex=null  
                items=this.state.services.Services
            }
            else{
                subpageindex=this.props.control.activeSubpageToControl.substr(this.props.control.activeSubpageToControl.length -1)-1
                items=this.state.services.SubPages[subpageindex].Services;
            }

        }




        return (
            
        <div>
            <div class="itemsWrapper">
        {items.map((item,index)=>
        
            

            <div class="itembox">
            <div>{item[name]}</div>
            <div>{item.description}</div>
            <button onClick={()=>this.edititem(index)}>Edit</button>
            <button onClick={()=>this.deleteitem(type,subpageindex,index)}>Delete</button>
            {(this.state.popupshow)?<PopupPage subpageindex={subpageindex} itemindex={this.state.Itemindex} type={type} show="control" exitsignal={this.exitsignal}/>:""}
            </div>
            
           
           
        )}
         </div>
        <button onClick={()=>this.additem(type,subpageindex)}>Add Item</button>
            </div>
           
        
);

}

}

const mapStateToProps = state => ({
   
    control: state.submit.pages.control,
    products: state.submit.pages.products,
    services: state.submit.pages.services,
   
    
});




 export default connect(mapStateToProps,{changecontrolpage})(Item);