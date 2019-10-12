import React, { Component } from 'react';
import {connect} from 'react-redux';
import InputLine from "./InputLine"

import {changecontrolpage} from "../../actions/submitaction"


// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./PopupPage.css"

 class PopupPage extends Component {

    constructor(props) {
        super(props);
        // this.props.type;
        // this.props.show;
        // this.props.subpageindex;
        // this.props.itemindex

        this.exit = this.exit.bind(this);
        
        this.state = {
            
            products:this.props.products,
            services:this.props.services,
            
        }
}

changeit=(id,event)=>{
    console.log(id.index)

    let localcopy=this.state[id.page]
    if(id.subpageindex=="off" && id.page=="products"){
        localcopy.Products[id.index][id.value]=event
    }
    else if(id.subpageindex!="off" && id.page=="products"){
        localcopy.SubPages[id.subpageindex].Products[id.index][id.value]=event
    }
    this.setState({[id.page]:localcopy})


}

fillcontents=()=>{
     console.log("inside fill content")
     console.log(" this is popUp "+this.props.type+" "+this.props.show+" "+this.props.subpageindex + " " +this.props.itemindex)
   let item;

    if(this.props.type=="products" && this.props.show=="control" ){
        if(this.props.subpageindex==null){
            item=this.state.products.Products[this.props.itemindex]
           return <div>
           <InputLine header="Product Name" placeholder=""
         data={item.ProductName} 
         changevalue={(e)=>this.changeit({page:"products",subpageindex:"off",index:this.props.itemindex,value:"ProductName"},e)} 
         type="input"/>
         <InputLine header="description" placeholder=""
         data={item.description} 
         changevalue={(e)=>this.changeit({page:"products",subpageindex:"off",index:this.props.itemindex,value:"description"},e)} 
         type="input"/>
         <button onClick={changecontrolpage("products",this.state.products)}>Save</button>
  
           
           </div>
       }else{
        item=this.state.products.SubPages[this.props.subpageindex].Products[this.props.itemindex]
        return <div>
        <InputLine header="Product Name" placeholder=""
      data={item.ProductName} 
      changevalue={(e)=>this.changeit({page:"products",subpageindex:this.props.subpageindex,index:this.props.itemindex,value:"ProductName"},e)} 
      type="input"/>
      <InputLine header="description" placeholder=""
      data={item.description} 
      changevalue={(e)=>this.changeit({page:"products",subpageindex:this.props.subpageindex,index:this.props.itemindex,value:"description"},e)} 
      type="input"/>
      <button onClick={changecontrolpage("products",this.state.products)}>Save</button>

        
        </div>
       }
   
   
          
   
       }
   
       else if(this.props.type=="services" && this.props.show=="control" ){
           if(this.props.subpageindex==null){
            item=this.state.services.Services[this.props.itemindex]
               return <div>{item.ServiceName}</div>
           }else{
            item=this.state.services.SubPages[this.props.subpageindex].Services[this.props.itemindex]
               return <div>{item.ServiceName}</div>
           
           }
   
   
       }
   
    
}




componentWillMount(){

    //this.props.fetchcontacts();
    // this.props.fetchalldata('none','none');
    
}

 
exit(){
   // e.preventDefault();
this.props.exitsignal(false);
}

    render() {



        return (
        
            <div class="PopupPageBackground"  onClick={()=>this.exit}>
        <div class="PopupPageWrapper">
<div  class="PopupPageNavigation">
    <div  class="PopupPageexit" onClick={this.exit}> X </div>
</div>

<div class="PopupPageContentWrapper">
{this.fillcontents()}
</div>



        </div>
        </div>

        )
           
        


}

}

const mapStateToProps = state => ({
   
    control: state.submit.pages.control,
    products: state.submit.pages.products,
    services: state.submit.pages.services,
   
    
});




 export default connect(mapStateToProps,{changecontrolpage})(PopupPage);