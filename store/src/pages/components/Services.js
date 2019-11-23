import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
//import {moment} from 'moment'
import 'moment-timezone'
import {changePageConfiguration} from "../../actions/submitaction"
import PopupPage from "./PopupPage"



import "./Services.css"

class Services extends Component {

  constructor(props) {
    super(props);
    this.toReservePage=this.toReservePage.bind(this);
    this.getAvailbleTimeInDate=this.getAvailbleTimeInDate.bind(this);
    this.openDetails=this.openDetails.bind(this);


    this.state={
    redirect:false,
    services:this.props.service,
    popupshow:false,
    Itemindex:null,
    SubPageIndex:null,
    }
    
  }

  exitsignal=(e)=>{
    this.setState({popupshow:e})
    }

  openDetails(index){
    this.setState({popupshow:true,Itemindex:index});
  }

  toReservePage(isSubPage,SubPageIndex,ItemIndex) {
        
if(isSubPage){
var servicetoAppointment=this.props.service.SubPages[SubPageIndex].Services[ItemIndex];
}
else {
var servicetoAppointment=this.props.service.Services[ItemIndex];
}

for(let i=0;i<=6;i++){          //check if no appointments exists in tree
  if(servicetoAppointment.Appointments[i].exists){break}
  else{ if(i==6){alert("No appointments are available");return;} else continue;}
  }

var moment = require('moment');
let currentDate=moment();
let result;
let incrementedDate=currentDate;

for(let m=0;m<=15;m++){ //searching for 15 days ahead
 
  
  //console.log(incrementedDate.format("DD/MM/YYYY"))
if(servicetoAppointment.UnavailableDates.includes(incrementedDate.format("D/M/YYYY"))){
  incrementedDate=currentDate.add(1,'days');}

  result=this.getAvailbleTimeInDate(incrementedDate,servicetoAppointment)
  
if(result.status){
  var stateService=this.state.services;
  if(isSubPage){stateService.SubPages[SubPageIndex].Services[ItemIndex]=result.newService}
  else {stateService.Services[ItemIndex]=result.newService}
  this.setState({services:stateService})
  this.props.changePageConfiguration("services",this.state.services)
  this.setState({redirect:true})
  return
}
else {
  incrementedDate=currentDate.add(1,'days');
  // console.log(result.reason);
  continue;
}
}
alert("No appointments are available in the next 15 days")
return;    
  }
getNextTime(chosenHour,chosenMin,increments){

  let nextMin=(Number(chosenMin)+Number(increments))%60
  let nextHour=(Number(chosenHour)+Math.floor((Number(chosenMin)+Number(increments))/60))%24
  let nextTime=nextHour+":"+((nextMin<=9) ? ("0"+nextMin) :nextMin);
return {hour:nextHour,min:((nextMin<=9) ? ("0"+nextMin) :nextMin),time:nextTime}
}

getAvailbleTimeInDate(date,service){
 
  var moment = require('moment');
  if(date.isBefore(moment())){alert("Selected date is in the past we will choose nearest appointment for you");
                              date=moment();}
  for(let i=0;i<=6;i++){
    console.log(date.format('dddd'))
    console.log(service.Appointments[i].Day)
   console.log(service.Appointments[i].exists)
  if(date.format('dddd')==service.Appointments[i].Day&&service.Appointments[i].exists||service.UnavailableDates.includes(date.format('D/M/YYYY'))){

  
    let startHour=service.Appointments[i].FromHour1;
    let startMin=service.Appointments[i].FromMin1;
    startMin=((startMin<=9) ? ("0"+startMin) :startMin)
    let nextTime={time:startHour+":"+startMin,hour:startHour,min:startMin}
    let HourThisIteration=nextTime.hour

  while(nextTime.hour<24 && nextTime.hour>=HourThisIteration){
    console.log(moment(date.format("M/D/YYYY")+" "+nextTime.hour+":"+nextTime.min,"M/D/YYYY H:m").format("D/M/YYYY H:m"))

    HourThisIteration=nextTime.hour;
    for(let l=0;l<service.TakenAppointments.length;l++){
//console.log(nextTime)
      if((service.TakenAppointments[l].Time==nextTime.time && 
          service.TakenAppointments[l].Date==date.format('D/M/YYYY') &&
          service.TakenAppointments[l].number>=service.Appointments[i].ServingLines) 
        || 
        moment().isSameOrAfter(moment(date.format("M/D/YYYY")+" "+nextTime.hour+":"+nextTime.min,"M/D/YYYY H:m")) 
        ||
        !(moment(date.format("M/D/YYYY")+" "+nextTime.hour+":"+nextTime.min,"M/D/YYYY H:m").isBetween(
          moment(date.format("M/D/YYYY")+" "+service.Appointments[i].FromHour1+":"+service.Appointments[i].FromMin1,"M/D/YYYY H:m"),
          moment(date.format("M/D/YYYY")+" "+service.Appointments[i].ToHour1+":"+service.Appointments[i].ToMin1,"M/D/YYYY H:m") )
           ||
          moment(date.format("M/D/YYYY")+" "+nextTime.hour+":"+nextTime.min,"M/D/YYYY H:m").isBetween(
          moment(date.format("M/D/YYYY")+" "+service.Appointments[i].FromHour2+":"+service.Appointments[i].FromMin2,"M/D/YYYY H:m"),
          moment(date.format("M/D/YYYY")+" "+service.Appointments[i].ToHour2+":"+service.Appointments[i].ToMin2,"M/D/YYYY H:m") ))
        ||
          !(l==service.TakenAppointments.length-1) ) 
        { 
          // console.log(nextTime)
          // console.log(service.TakenAppointments[l].Time==nextTime.time)
          // console.log(service.TakenAppointments[l].Date==date.format('D/M/YYYY'))
          // console.log(service.TakenAppointments[l].number>=service.Appointments[i].ServingLines)
          // console.log(moment().isSameOrAfter(moment(date.format("M/D/YYYY")+" "+nextTime.hour+":"+nextTime.min,"M/D/YYYY H:m")))
          // console.log(!(moment(date.format("M/D/YYYY")+" "+nextTime.hour+":"+nextTime.min,"M/D/YYYY H:m").isBetween(
          //   moment(date.format("M/D/YYYY")+" "+service.Appointments[i].FromHour1+":"+service.Appointments[i].FromMin1,"M/D/YYYY H:m"),
          //   moment(date.format("M/D/YYYY")+" "+service.Appointments[i].ToHour1+":"+service.Appointments[i].ToMin1,"M/D/YYYY H:m") )
          //    ||
          //   moment(date.format("M/D/YYYY")+" "+nextTime.hour+":"+nextTime.min,"M/D/YYYY H:m").isBetween(
          //   moment(date.format("M/D/YYYY")+" "+service.Appointments[i].FromHour2+":"+service.Appointments[i].FromMin2,"M/D/YYYY H:m"),
          //   moment(date.format("M/D/YYYY")+" "+service.Appointments[i].ToHour2+":"+service.Appointments[i].ToMin2,"M/D/YYYY H:m") )))
          
        
          continue; }
        
       else {
        service.ClientAppointment.Date=date.format('D/M/YYYY')
        service.ClientAppointment.Time=nextTime.time
        service.ClientAppointment.exists=true
        console.log(l)
        console.log("taken number "+service.TakenAppointments[l].number)
        console.log("lines available "+service.Appointments[i].ServingLines)
        console.log(service.TakenAppointments[l].number<service.Appointments[i].ServingLines)
        console.log(service.TakenAppointments[l].Time=='')
        console.log(service.TakenAppointments[l].Date=="")
        console.log(service.TakenAppointments[l].number=="")
        console.log(service.TakenAppointments[l].number)

        if(service.TakenAppointments[l].number<service.Appointments[i].ServingLines&&service.TakenAppointments[l].number!="")
         {service.TakenAppointments[l].number++}
        else service.TakenAppointments.push({Date:date.format('D/M/YYYY'),Time:nextTime.time,number:1})
         return {status:true,newService:service}
       }
 
    }
    nextTime=this.getNextTime(nextTime.hour, nextTime.min, service.Appointments[i].ServingTime)
  }
    
    return {status:false,currentDate:date,reason:"We were unable to find any appointment in that day"}
  }
  else {continue}
  

  }
  return {status:false,currentDate:date,reason:"No appointments are available in "+date.format('dddd')}

}


componentWillMount(){
  
  
}

    render() {


      if (this.state.redirect) {
        return <Redirect to='/reserve'/>;
      }

      if (this.props.subpage){
        var subpageIndex=this.props.subpageurl.substr(this.props.subpageurl.length -1)-1;
            }

      if(!this.props.subpage) {var servicesPage=this.props.service;}
      else {var servicesPage=this.props.service.SubPages[subpageIndex];}

        return (
            
<div class="productswrapper">

{servicesPage.Services.map((product,index)=>
  
  <div key={product.ServiceId} class="product">

    <div class="ProductImageArea">
      <img src={product.image} alt="fashion" id="productimage"/>
    </div>

    <div id="descriptiondata">
      <div class="ProductName">{product.ServiceName}</div>
      <div class="ProductDetails">{product.description}</div>
      <div class="ProductPrice">Price: {product.price}</div>
      <br/>
      <button onClick={()=>this.toReservePage(this.props.subpage,subpageIndex,index)}>Reserve appointment</button>

      <div class="MoreInfos" onClick={()=>this.openDetails(index)}><a href="#">More...</a></div>
    </div> 
    
  </div>
)}
 {(this.state.popupshow)?<PopupPage subpageflag={this.props.subpage} subpageindex={subpageIndex} itemindex={this.state.Itemindex} type="services" show="detail" exitsignal={this.exitsignal}/>:""}

</div>


        
);
}

}

const mapStateToProps = state => ({
    service: state.submit.pages.services,
    
    
});





 export default connect(mapStateToProps,{changePageConfiguration})(Services);

 