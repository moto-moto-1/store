import React, { Component } from 'react';
import {connect} from 'react-redux';
import InputLine from "./InputLine"

import {changePageConfiguration} from "../../actions/submitaction"


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

checkboxchanged=(e,index,forWholeDay) =>{
    console.log(e.target.checked)
    console.log(index)
   

    let localstate=this.state.services;
    if(this.props.subpageindex==null){
        if(forWholeDay) localstate.Services[this.props.itemindex].Appointments[index].WholeDay=e.target.checked
        else localstate.Services[this.props.itemindex].Appointments[index].exists=e.target.checked
         }
else{
    if(forWholeDay) localstate.Services[this.props.itemindex].Appointments[index].WholeDay=e.target.checked
    else localstate.SubPages[this.props.subpageindex].Services[this.props.itemindex].Appointments[index].exists=e.target.checked
}

this.setState({services:localstate})

}

changeit=(id,event)=>{
    console.log(id.index)

    let localcopy=this.state[id.page]
    if(id.subpageindex=="off" && id.page=="products"){
        if(id.changeQuantity){localcopy.Products[id.index].cart[id.value]=event}
        else localcopy.Products[id.index][id.value]=event
    }
    else if(id.subpageindex!="off" && id.page=="products"){
        if(id.changeQuantity){}
        else localcopy.SubPages[id.subpageindex].Products[id.index][id.value]=event
    }
    else if(id.subpageindex=="off" && id.page=="services"){
        if(id.Appointments){
            localcopy.Services[id.index].Appointments[id.AppointmentIndex][id.value]=event
        }else if(id.UnavailableDates){

        }
        else localcopy.Services[id.index][id.value]=event
    }
    else if(id.subpageindex!="off" && id.page=="services"){
        localcopy.SubPages[id.subpageindex].Services[id.index][id.value]=event
    }
    this.setState({[id.page]:localcopy})


}

fillcontents=()=>{
     let item;
    if(this.props.type=="products" && this.props.show=="control" ){
        if(this.props.subpageindex==null){
            item=this.state.products.Products[this.props.itemindex]
            var subpageindexvalue="off"
        }
    else{
        item=this.state.products.SubPages[this.props.subpageindex].Products[this.props.itemindex]
        var subpageindexvalue=this.props.subpageindex
    }
           return <div>
           <InputLine header="Product Name" placeholder=""
         data={item.ProductName} 
         changevalue={(e)=>this.changeit({page:"products",subpageindex:subpageindexvalue,index:this.props.itemindex,value:"ProductName"},e)} 
         type="input"/>
         <InputLine header="description" placeholder=""
         data={item.description} 
         changevalue={(e)=>this.changeit({page:"products",subpageindex:subpageindexvalue,index:this.props.itemindex,value:"description"},e)} 
         type="input"/>
         <InputLine header="Main Image Link" placeholder=""
         data={item.image} 
         changevalue={(e)=>this.changeit({page:"products",subpageindex:subpageindexvalue,index:this.props.itemindex,value:"image"},e)} 
         type="input"/>
         <InputLine header="Price" placeholder=""
         data={item.price} 
         changevalue={(e)=>this.changeit({page:"products",subpageindex:subpageindexvalue,index:this.props.itemindex,value:"price"},e)} 
         type="input"/>

         <InputLine header="Available Quantity" placeholder="" 
         data={item.cart.QuantityAvailable} 
         changevalue={(e)=>this.changeit({page:"products",subpageindex:subpageindexvalue,index:this.props.itemindex,value:"QuantityAvailable",changeQuantity:true},e)} 
         type="input"/>
         
         
         
         <button onClick={()=>this.props.changePageConfiguration("products",this.state.products)}>Save</button>
          
           </div>
      

}
   
       else if(this.props.type=="services" && this.props.show=="control" ){
        if(this.props.subpageindex==null){

         item=this.state.services.Services[this.props.itemindex]
         var subpageindexvalue="off"
        }
     else{

         item=this.state.services.SubPages[this.props.subpageindex].Services[this.props.itemindex]
         var subpageindexvalue=this.props.subpageindex
     }
         return <div>
         <InputLine header="Service Name" placeholder=""  data={item.ServiceName} 
       changevalue={(e)=>this.changeit({page:"services",subpageindex:subpageindexvalue,index:this.props.itemindex,value:"ServiceName"},e)} 
       type="input"/>
       <InputLine header="description" placeholder=""
       data={item.description} 
       changevalue={(e)=>this.changeit({page:"services",subpageindex:subpageindexvalue,index:this.props.itemindex,value:"description"},e)} 
       type="input"/>
       <InputLine header="Main Image Link" placeholder=""
      data={item.image} 
      changevalue={(e)=>this.changeit({page:"services",subpageindex:subpageindexvalue,index:this.props.itemindex,value:"image"},e)} 
      type="input"/>


      {
item.Appointments.map( 
    (appointment,AppointmentIndex)=>
    <div>
        <hr/>
   <input type="checkbox" onChange={(e)=>this.checkboxchanged(e,AppointmentIndex)} checked={appointment.exists}/>{appointment.Day}
   <input type="checkbox" onChange={(e)=>this.checkboxchanged(e,AppointmentIndex,true)} checked={appointment.WholeDay}/>Whole day

   <div style={{display: (appointment.exists && !appointment.WholeDay) ? "block":"none"  }}>

<InputLine header="Serving time (min)" placeholder="" data={appointment.ServingTime} 
     changevalue={(e)=>this.changeit({page:"services",subpageindex:"off",AppointmentIndex:AppointmentIndex,Appointments:true,index:this.props.itemindex,value:"ServingTime"},e)} 
      type="inputnumber"/>

<InputLine header="Serving Lines" placeholder="" data={appointment.ServingLines} 
     changevalue={(e)=>this.changeit({page:"services",subpageindex:"off",AppointmentIndex:AppointmentIndex,Appointments:true,index:this.props.itemindex,value:"ServingLines"},e)} 
      type="inputnumber"/>

      <center>shift 1</center>
      <InputLine header="From hour" placeholder="" data={appointment.FromHour1} 
     changevalue={(e)=>this.changeit({page:"services",subpageindex:"off",AppointmentIndex:AppointmentIndex,Appointments:true,index:this.props.itemindex,value:"FromHour1"},e)} 
      type="inputnumber"/>
      <InputLine header="From min" placeholder="" data={appointment.FromMin1} 
     changevalue={(e)=>this.changeit({page:"services",subpageindex:"off",AppointmentIndex:AppointmentIndex,Appointments:true,index:this.props.itemindex,value:"FromMin1"},e)} 
      type="inputnumber"/>
      <InputLine header="To hour" placeholder="" data={appointment.ToHour1} 
     changevalue={(e)=>this.changeit({page:"services",subpageindex:"off",AppointmentIndex:AppointmentIndex,Appointments:true,index:this.props.itemindex,value:"ToHour1"},e)} 
      type="inputnumber"/>
      <InputLine header="To min" placeholder="" data={appointment.ToMin1} 
     changevalue={(e)=>this.changeit({page:"services",subpageindex:"off",AppointmentIndex:AppointmentIndex,Appointments:true,index:this.props.itemindex,value:"ToMin1"},e)} 
      type="inputnumber"/>

      <center>shift 2</center>
      <InputLine header="From hour" placeholder="" data={appointment.FromHour2} 
     changevalue={(e)=>this.changeit({page:"services",subpageindex:"off",AppointmentIndex:AppointmentIndex,Appointments:true,index:this.props.itemindex,value:"FromHour2"},e)} 
      type="inputnumber"/>
      <InputLine header="From min" placeholder="" data={appointment.FromMin2} 
     changevalue={(e)=>this.changeit({page:"services",subpageindex:"off",AppointmentIndex:AppointmentIndex,Appointments:true,index:this.props.itemindex,value:"FromMin2"},e)} 
      type="inputnumber"/>
      <InputLine header="To hour" placeholder="" data={appointment.ToHour2} 
     changevalue={(e)=>this.changeit({page:"services",subpageindex:"off",AppointmentIndex:AppointmentIndex,Appointments:true,index:this.props.itemindex,value:"ToHour2"},e)} 
      type="inputnumber"/>
      <InputLine header="To min" placeholder="" data={appointment.ToMin2} 
     changevalue={(e)=>this.changeit({page:"services",subpageindex:"off",AppointmentIndex:AppointmentIndex,Appointments:true,index:this.props.itemindex,value:"ToMin2"},e)} 
      type="inputnumber"/>

      </div>
      </div>
)
       }
         <button onClick={()=>this.props.changePageConfiguration("services",this.state.services)}>Save</button>
      </div> 

       
            
        
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




 export default connect(mapStateToProps,{changePageConfiguration})(PopupPage);