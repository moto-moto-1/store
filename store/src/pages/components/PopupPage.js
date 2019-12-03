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
            lg:this.props.lg[this.props.Header.language],
            txtalgn:{textAlign:this.props.Header.direction}
            
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

AddOption = (option,e) =>{
    e.preventDefault();
    if(option.type=="products"){
    
      (!option.subpage)? this.state.products.Products[option.index].options.push({OptionName:"" , selected:""})
      :this.state.products.SubPages[option.SubPageIndex].Products[option.index].options.push({OptionName:"" ,selected:""})
    
        this.setState({products: {...this.state.products}}) 
    }
    else if(option.type=="services"){

        (!option.subpage)?this.state.services.Services[option.index].options.push({OptionName:"" , selected:""})
        :this.state.services.SubPages[option.SubPageIndex].Services[option.index].options.push({OptionName:"" ,selected:""})

        this.setState({services: {...this.state.services}}) 

    }
}


changeit=(id,event)=>{
    console.log(id.index)

    let localcopy=this.state[id.page]
    if(id.subpageindex=="off" && id.page=="products"){

        if(id.changeQuantity){localcopy.Products[id.index].cart[id.value]=event}
        if(id.value=="OptionName"){localcopy.Products[id.index].options[id.OptionIndex][id.value]=event}
        
        else localcopy.Products[id.index][id.value]=event
    }
    else if(id.subpageindex!="off" && id.page=="products"){

        if(id.changeQuantity){localcopy.SubPages[id.subpageindex].Products[id.index].cart[id.value]=event}
        if(id.value=="OptionName"){localcopy.SubPages[id.subpageindex].Products[id.index].options[id.OptionIndex][id.value]=event}
        
        else localcopy.SubPages[id.subpageindex].Products[id.index][id.value]=event
    }
    else if(id.subpageindex=="off" && id.page=="services"){
        if(id.Appointments){
            localcopy.Services[id.index].Appointments[id.AppointmentIndex][id.value]=event
        }else if(id.UnavailableDates){
        }
        if(id.value=="OptionName"){localcopy.Services[id.index].options[id.OptionIndex][id.value]=event}

        else localcopy.Services[id.index][id.value]=event
    }
    else if(id.subpageindex!="off" && id.page=="services"){
        if(id.Appointments){
            localcopy.SubPages[id.subpageindex].Services[id.index].Appointments[id.AppointmentIndex][id.value]=event
        }else if(id.UnavailableDates){
        }
        if(id.value=="OptionName"){localcopy.SubPages[id.subpageindex].Services[id.index].options[id.OptionIndex][id.value]=event}

        localcopy.SubPages[id.subpageindex].Services[id.index][id.value]=event
    }
    this.setState({[id.page]:localcopy})


}

fillcontents=()=>{
     let item;
     let eso='&nbsp;'
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
         type="textarea"/>
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

         <div>Options Available:</div>

         {item.options.map( (option,index) =>
        <InputLine header={"Option "+(1+index)} placeholder="" 
         data={option.OptionName} 
         changevalue={(e)=>this.changeit({page:"products",subpageindex:subpageindexvalue,index:this.props.itemindex,value:"OptionName",OptionIndex:index},e)} 
         type="input"/>)}
         <button onClick={(e)=>this.AddOption({type:"products",subpage:subpageindexvalue=="off"?false:true,SubPageIndex:this.props.subpageindex,index:this.props.itemindex},e)}>Add Option</button>
         
         
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
       type="textarea"/>
       <InputLine header="Main Image Link" placeholder=""
      data={item.image} 
      changevalue={(e)=>this.changeit({page:"services",subpageindex:subpageindexvalue,index:this.props.itemindex,value:"image"},e)} 
      type="input"/>

<div>Options Available:</div>

{item.options.map( (option,index) =>
<InputLine header={"Option "+(1+index)} placeholder="" 
data={option.OptionName} 
changevalue={(e)=>this.changeit({page:"services",subpageindex:subpageindexvalue,index:this.props.itemindex,value:"OptionName",OptionIndex:index},e)} 
type="input"/>)}
<button onClick={(e)=>this.AddOption({type:"services",subpage:subpageindexvalue=="off"?false:true,SubPageIndex:this.props.subpageindex,index:this.props.itemindex},e)}>Add Option</button>



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
        <div class={this.state.txtalgn}> <button onClick={()=>this.props.changePageConfiguration("services",this.state.services)}>{this.state.lg.ctrl.svBtn}</button></div>
      </div> 

       
            
        
        }

        else if(this.props.type=="products" && this.props.show=="detail"){

            if(this.props.subpageflag){
                var itemNew=this.state.products.SubPages[this.props.subpageindex].Products[this.props.itemindex]}
            else{var itemNew=this.state.products.Products[this.props.itemindex]}

           return <div class="detailsWrapper">
             
        <div class="productImagesInDetails">
        <img src={itemNew.image} style={{maxWidth:"7cm"}} alt="fashion" id="productimage"/>
        {itemNew.images.map((imageseq,Index)=>
            <img src={imageseq} style={{maxWidth:"7cm",left:(Index+1)*7+"cm"}} alt="fashion" id="productimage"/>
            )}

           </div>
           { (itemNew.images.length>0) ? <div><small>{this.state.lg.pr.scrimg}</small><br/><br/></div>:null }

           <div class="productNameInDetails">{itemNew.ProductName}</div>

        <div class="productDescriptionInDetails">{itemNew.description}</div>
        {(itemNew.options[0].OptionName!="")?
        (this.props.Header.direction=="left")?
        <div>{this.state.lg.pr.opAv+": "+itemNew.options.map(option=>option.OptionName+" ")}</div>
        :<div style={{display:"flex",flexDirection:this.props.Header.flxdir}}><div>{" :"+this.state.lg.pr.opAv}</div><div style={{display:"flex",flexFlow:"wrap "+this.props.Header.flxdir}}>{itemNew.options.map(option=><div>{option.OptionName+" , "}</div>)}</div></div>
        :null}
        
        
        {(this.props.Header.direction=="left")?<div>{this.state.lg.pr.prc+": "+itemNew.price}</div>:<div>{itemNew.price+" :"+this.state.lg.pr.prc}</div>}
        {(this.props.Header.direction=="left")?<div>{this.state.lg.pr.qtAv+": "+itemNew.cart.QuantityAvailable}</div>:<div>{itemNew.cart.QuantityAvailable+" :"+this.state.lg.pr.qtAv}</div>}

        

           
            </div>

        }
        else if(this.props.type=="services" && this.props.show=="detail"){

            if(this.props.subpageflag){
                var itemNew=this.state.services.SubPages[this.props.subpageindex].Services[this.props.itemindex]}
            else{var itemNew=this.state.services.Services[this.props.itemindex]}

           return <div class="detailsWrapper">
             
        <div class="productImagesInDetails" style={{flexDirection: (this.props.Header.direction=="right")?'row-reverse':'row'}}>
        <img src={itemNew.image} style={{maxWidth:"7cm"}} alt="fashion"/>
        
        {itemNew.images.map((imageseq,Index)=>
            <img src={imageseq} style={{maxWidth:"7cm",[this.props.direction]:(Index+1)*7+"cm"}} alt="fashion"/>
            )}

           </div>
           { (itemNew.images.length>0) ? <div><small>{this.state.lg.sv.scrimg}</small><br/><br/></div>:null }

           <div class="productNameInDetails">{itemNew.ServiceName}</div>

        <div class="productDescriptionInDetails">{itemNew.description}</div>

        {(itemNew.options[0].OptionName!="")?
        (this.props.Header.direction=="left")?
        <div>{this.state.lg.sv.opAv+": "+itemNew.options.map(option=>option.OptionName+" ")}</div>
        :<div style={{display:"flex",flexDirection:this.props.Header.flxdir}}><div>{" :"+this.state.lg.sv.opAv}</div><div style={{display:"flex",flexFlow:"wrap "+this.props.Header.flxdir}}>{itemNew.options.map(option=><div>{option.OptionName+" , "}</div>)}</div></div>
        :null}

        {(this.props.Header.direction=="left")?<div>{this.state.lg.sv.prc+": "+itemNew.price}</div>:<div>{itemNew.price+" :"+this.state.lg.sv.prc}</div>}
    
           
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

<div class="PopupPageContentWrapper" style={{textAlign:this.props.Header.direction}}>
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
    Header: state.submit.Header.style,
    lg:state.submit.languages
});




 export default connect(mapStateToProps,{changePageConfiguration})(PopupPage);