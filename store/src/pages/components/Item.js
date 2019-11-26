import React, { Component } from 'react';
import {connect} from 'react-redux';
import PopupPage from "./PopupPage"
import {cloneDeep} from "lodash"

//import {newproductsubpage,newproduct,newservicesubpage,newservice} from "../constants"

import {changePageConfiguration} from "../../actions/submitaction"


// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./Item.css"

 class Item extends Component {

    constructor(props) {
        super(props);
this.edititem=this.edititem.bind(this);
this.deleteitem=this.deleteitem.bind(this);
this.additem=this.additem.bind(this);
this.addsubpage=this.addsubpage.bind(this);
        
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

addsubpage(page,pageindex){


    if(page=="products"){
        const localcopy=this.state.products
        let lastPageUrl=localcopy.SubPages[localcopy.SubPages.length-1].url
        let lastPageUrlNumber=lastPageUrl.charAt(lastPageUrl.length-1);
        lastPageUrlNumber=1+Number(lastPageUrlNumber)
        const newURL="products/productsCat"+lastPageUrlNumber        
        const productSubPage=cloneDeep({...this.state.products.emptySubPage,"url":newURL})
        
        // {"PageName":"حريمي","url":newURL,"exists":true,"LanguageDirection":"right","Title":"منتجات حريمي","Products":[{"ProductId":434351,"ProductName":"Short pants","price":344,"cart":{"QuantityAvailable":15,"SubTotal":0,"QuantityToAddDisplay":"none","SubTotalDisplay":"none","QuantityToAdd":1},"image":"https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg","description":"very good quality pants"}]}
        localcopy.SubPages.push(productSubPage)
        this.setState({products:localcopy})
        this.props.changePageConfiguration("products",this.state.products)
    }
    else if(page=="services"){
        let localcopy=this.state.services  
        let lastPageUrl=localcopy.SubPages[localcopy.SubPages.length-1].url
        var lastPageUrlNumber=lastPageUrl.charAt(lastPageUrl.length-1);
        lastPageUrlNumber=1+Number(lastPageUrlNumber)
        const newURL="services/ServicesCat"+lastPageUrlNumber
        const serviceSubPage=cloneDeep({...this.state.services.emptySubPage,"url":newURL})

        // const serviceSubPage={"PageName":"psyotherapy","exists":true,"url":newURL,"LanguageDirection":"right","Title":"علاج طبيعى","Services":[{"ServiceId":434351,"TakenAppointments":[{"Date":"","Time":"","number":""},{"Date":"","Time":"","number":""},{"Date":"","Time":"","number":""}],"Appointments":[{"Day":"Friday","exists":true,"ServingTime":2,"ServingLines":4,"FromHour1":2,"FromMin1":4,"ToHour1":4,"ToMin1":4,"FromHour2":4,"FromMin2":4,"ToHour2":4,"ToMin2":4,"WholeDay":false},{"Day":"Saterday","exists":false,"ServingTime":"2","ServingLines":"4","FromHour1":"2","FromMin1":"4","ToHour1":"4","ToMin1":"4","FromHour2":"4","FromMin2":"4","ToHour2":"4","ToMin2":"4","WholeDay":false},{"Day":"Sunday","exists":false,"ServingTime":"2","ServingLines":"4","FromHour1":"2","FromMin1":"4","ToHour1":"4","ToMin1":"4","FromHour2":"4","FromMin2":"4","ToHour2":"4","ToMin2":"4","WholeDay":false},{"Day":"Monday","exists":false,"ServingTime":"2","ServingLines":"4","FromHour1":"2","FromMin1":"4","ToHour1":"4","ToMin1":"4","FromHour2":"4","FromMin2":"4","ToHour2":"4","ToMin2":"4","WholeDay":false},{"Day":"Tuesday","exists":false,"ServingTime":"2","ServingLines":"4","FromHour1":"2","FromMin1":"4","ToHour1":"4","ToMin1":"4","FromHour2":"4","FromMin2":"4","ToHour2":"4","ToMin2":"4","WholeDay":false},{"Day":"Wednesday","exists":false,"ServingTime":"2","ServingLines":"4","FromHour1":"2","FromMin1":"4","ToHour1":"4","ToMin1":"4","FromHour2":"4","FromMin2":"4","ToHour2":"4","ToMin2":"4","WholeDay":false},{"Day":"Thursday","exists":false,"ServingTime":"2","ServingLines":"4","FromHour1":"2","FromMin1":"4","ToHour1":"4","ToMin1":"4","FromHour2":"4","FromMin2":"4","ToHour2":"4","ToMin2":"4","WholeDay":false}],"UnavailableDates":["12/12/2019","14/12/2019","22/12/2019"],"ServiceName":"Fat loss","price":344,"image":"https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg","description":"very good quality proceedure"}]}
        // newservicesubpage
        localcopy.SubPages.push(serviceSubPage)
        this.setState({services:localcopy})
        this.props.changePageConfiguration("services",this.state.services)        

    }



}

additem(page,pageindex){

    //const emptyProduct={...newproduct}
    const emptyProduct={...this.state.products.emptyProduct}

    //const emptyService={...newservice}
    const emptyService={...this.state.services.emptyService}
// console.log({...newservice})
// console.log({...this.state.services})
    if(page=="products"){
        const localcopy=this.state.products
        console.log(localcopy)
        if(pageindex==null){
localcopy.Products.push({...emptyProduct})
        }

        else{
            localcopy.SubPages[pageindex].Products.push({...emptyProduct})

        }
        console.log(localcopy)


        this.setState({products:{...localcopy}})
    }
    else if(page=="services"){
        let localcopy={...this.state.services}  
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
        <button onClick={()=>this.addsubpage(type,subpageindex)}>Add Sub Page</button>
            </div>
           
        
);

}

}

const mapStateToProps = state => ({
   
    control: state.submit.pages.control,
    products: state.submit.pages.products,
    services: state.submit.pages.services,
   
    
});




 export default connect(mapStateToProps,{changePageConfiguration})(Item);