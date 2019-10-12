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
            items=this.props.products.Products
          }
          else{
            subpageindex=this.props.control.activeSubpageToControl.substr(this.props.control.activeSubpageToControl.length -1)-1
            items=this.props.products.SubPages[subpageindex].Products;
            
          }

        }
        else if(this.props.control.activePageToControl=="services"){
            type="services"
            id="ServiceId"
            name="ServiceName"
            if(this.props.control.activeSubpageToControl==""){
                subpageindex=null  
                items=this.props.services.Services
            }
            else{
                subpageindex=this.props.control.activeSubpageToControl.substr(this.props.control.activeSubpageToControl.length -1)-1
                items=this.props.services.SubPages[subpageindex].Services;
            }

        }




        return (
        
        
        items.map((item,index)=>
            <div>
            <div>{item[name]}</div>
            <div>{item.description}</div>
            <button onClick={()=>this.edititem(index)}>Edit</button>
            {(this.state.popupshow)?<PopupPage subpageindex={subpageindex} itemindex={this.state.Itemindex} type={type} show="control" exitsignal={this.exitsignal}/>:""}
            </div>

        )
           
        
);

}

}

const mapStateToProps = state => ({
   
    control: state.submit.pages.control,
    products: state.submit.pages.products,
    services: state.submit.pages.services,
   
    
});




 export default connect(mapStateToProps,{changecontrolpage})(Item);