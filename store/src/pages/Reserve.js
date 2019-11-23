import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changePageConfiguration} from "../actions/submitaction"



import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
//import Loader from "../Social media Icons/loader.gif";

// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./Reserve.css"

class Reserve extends Component {

  constructor(props) {
    super(props);

    this.allAppointmentOptions=this.allAppointmentOptions.bind(this);
    

    this.state={
      products:this.props.product,
      services:this.props.service,
      cart: this.props.cart,
      reserve: this.props.reserve,
      ButtonDisplay:"none",
      
    }

    
  }

  DropDownchange=(e,service)=>{
    this.setState({ButtonDisplay:"block"})
let moment=require('moment')
let newState=this.state.services;

if(service.subpage){
  const newone=Object.assign({},newState.SubPages[service.subPageIndex].Services[service.index].ClientAppointment)
  newState.SubPages[service.subPageIndex].Services[service.index].OldClientAppointment=newone
newState.SubPages[service.subPageIndex].Services[service.index].ClientAppointment.Time=
moment(e.target.value.split("h")[0]+":"+e.target.value.split(":")[1].split("m")[0],"H:mm").format("H:mm");
}
else {
  const newone=Object.assign({},newState.Services[service.index].ClientAppointment)
  newState.Services[service.index].OldClientAppointment=newone
  
newState.Services[service.index].ClientAppointment.Time=
moment(e.target.value.split("h")[0]+":"+e.target.value.split(":")[1].split("m")[0],"H:mm").format("H:mm");
}
console.log(newState)

this.setState({services:newState})

  }
  DateChange=(e,service)=>{
    this.setState({ButtonDisplay:"block"})
    let moment=require('moment')
let newState=this.state.services;
if(service.subpage){
  const newone=Object.assign({},newState.SubPages[service.subPageIndex].Services[service.index].ClientAppointment)
  newState.SubPages[service.subPageIndex].Services[service.index].OldClientAppointment=newone
newState.SubPages[service.subPageIndex].Services[service.index].ClientAppointment.Date=moment(e.target.value,"MM/DD/YYYY").format("D/M/YYYY");
}
else {
  const newone=Object.assign({},newState.Services[service.index].ClientAppointment)
  newState.Services[service.index].OldClientAppointment=newone
newState.Services[service.index].ClientAppointment.Date=moment(e.target.value,"YYYY/MM/DD").format("D/M/YYYY");
}
this.setState({services:newState})
  

  }

  changeAppointmentButton=(service)=>{
    if (window.confirm('Are you sure you want to change your appointment?')) {
      let moment=require('moment') 
      let newState=this.state.services;


      let newservice=this.setNewAppointment(moment(service.service.ClientAppointment.Date+" "+service.service.ClientAppointment.Time,"D/M/YYYY H:mm"),service)

      if(service.subpage){
        newState.SubPages[service.subPageIndex].Services[service.index]=newservice.newService;
        }
        else {
        newState.Services[service.index]=newservice.newService;
        }
        this.setState({services:newState})
        this.props.changePageConfiguration("services",this.state.services)

      
  } else {}
  }

  getNextTimeOption(chosenHour,chosenMin,increments){

    let nextMin=(Number(chosenMin)+Number(increments))%60
    let nextHour=(Number(chosenHour)+Math.floor((Number(chosenMin)+Number(increments))/60))%24
    let nextTime=nextHour+":"+((nextMin<=9) ? ("0"+nextMin) :nextMin);
  return {hour:nextHour,min:((nextMin<=9) ? ("0"+nextMin) :nextMin),time:nextTime}
  }

  allAppointmentOptions(service,date){
let optionsArray=[]
var moment=require('moment')
date=moment(date,"D/M/YYYY")
for(let i=0;i<=6;i++){
if(date.format('dddd')==service.Appointments[i].Day&&service.Appointments[i].exists){

    let startHour=service.Appointments[i].FromHour1;
    let startMin=service.Appointments[i].FromMin1;
    startMin=((startMin<=9) ? ("0"+startMin) :startMin)
    let nextTime={time:startHour+":"+startMin,hour:startHour,min:startMin}
    let HourThisIteration=nextTime.hour
    let Selecttag

    while(nextTime.hour<24 && nextTime.hour>=HourThisIteration){

      HourThisIteration=nextTime.hour;

      for(let l=0;l<service.TakenAppointments.length;l++){
        
      if((service.TakenAppointments[l].Time==nextTime.time && 
          service.TakenAppointments[l].Date==date.format('D/M/YYYY') &&
          service.TakenAppointments[l].number>=service.Appointments[i].ServingLines) 
          || !(l==service.TakenAppointments.length-1) ||
        moment(date.format("M/D/YYYY")+" "+nextTime.hour+":"+nextTime.min,"M/D/YYYY H:m").isBetween(
        moment(date.format("M/D/YYYY")+" "+service.Appointments[i].FromHour1+":"+service.Appointments[i].FromMin1,"M/D/YYYY H:m"),
        moment(date.format("M/D/YYYY")+" "+service.Appointments[i].ToHour1+":"+service.Appointments[i].ToMin1,"M/D/YYYY H:m") )
        ||
        moment(date.format("M/D/YYYY")+" "+nextTime.hour+":"+nextTime.min,"M/D/YYYY H:m").isBetween(
        moment(date.format("M/D/YYYY")+" "+service.Appointments[i].FromHour2+":"+service.Appointments[i].FromMin2,"M/D/YYYY H:m"),
        moment(date.format("M/D/YYYY")+" "+service.Appointments[i].ToHour2+":"+service.Appointments[i].ToMin2,"M/D/YYYY H:m") )
        ){
          Selecttag= (nextTime.time==service.ClientAppointment.Time)?"selected":""
         if(nextTime.time==service.ClientAppointment.Time){
          optionsArray.push(<option selected>{nextTime.hour}h:{nextTime.min}min</option>)
         }else
          optionsArray.push(<option>{nextTime.hour}h:{nextTime.min}min</option>)
      }
      nextTime=this.getNextTimeOption(nextTime.hour, nextTime.min, service.Appointments[i].ServingTime)
    }
  }
}
}
return optionsArray;
  }

  setNewAppointment(date,Service){
    let service=Service.service
    var moment = require('moment');
    if(date.isBefore(moment())){alert("Selected date is in the past");
                                date=moment();}
    for(let i=0;i<=6;i++){
      if(date.format('dddd')==service.Appointments[i].Day&&service.Appointments[i].exists||service.UnavailableDates.includes(date.format('D/M/YYYY'))){
  
    
      let startHour=date.format('H');
      let startMin=date.format('m');
      startMin=((startMin<=9) ? ("0"+startMin) :startMin)
      let nextTime={time:startHour+":"+startMin,hour:startHour,min:startMin}

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
          { alert("Chosen time is not availble")}
          
         else {
          for(let m=0;m<service.TakenAppointments.length;m++){
            console.log("our m is "+m)
            console.log(service.TakenAppointments[m].Time)
            console.log(service.TakenAppointments[m].Date)
            console.log(service.OldClientAppointment.Time)
              console.log(service.OldClientAppointment.Date)  
            
            console.log(service.TakenAppointments.length-1)
            

        
            if((service.TakenAppointments[m].Time==service.OldClientAppointment.Time && 
                service.TakenAppointments[m].Date==service.OldClientAppointment.Date))
                {
                  if(service.TakenAppointments[m].number<=1)
                  {service.TakenAppointments[m].Time="";service.TakenAppointments[m].Date=""}
                  else {service.TakenAppointments[m].number--}
                }}
          
  
          if(service.TakenAppointments[l].number<service.Appointments[i].ServingLines&&service.TakenAppointments[l].number!=""&& service.TakenAppointments[l].Time==service.ClientAppointment.Time && service.TakenAppointments[l].Date==service.ClientAppointment.Date)
           {service.TakenAppointments[l].number++}
          else service.TakenAppointments.push({Date:date.format('D/M/YYYY'),Time:nextTime.time,number:1})
          
          service.ClientAppointment.Date=date.format('D/M/YYYY')
          service.ClientAppointment.Time=nextTime.time
          service.ClientAppointment.exists=true
          
          return {status:true,newService:service}
         }
   
      }
     
      
      return {status:false,currentDate:date,reason:"We were unable to find any appointment in that day"}
    }
    else {alert("Chosen date is not available is not available")}
    
  
    }
    return {status:false,currentDate:date,reason:"No appointments are available in "+date.format('dddd')}
  

  }

  

componentWillMount(){
  
  //return <img src={Loader}></img> ;
 
}


    render() {
      var moment=require('moment')
      var ServicesWithAppointments=[];
      this.state.services.Services.map((serviceInMain,serviceIndex)=>
      serviceInMain.ClientAppointment.exists ? ServicesWithAppointments.push({service:serviceInMain,subpage:false,index:serviceIndex,subPageIndex:null}) : null
          );
      this.state.services.SubPages.map((Subpage,Subpage_Index)=>
      Subpage.Services.map((ServiceInSubpage,ServiceIndexInSubpage)=>
      ServiceInSubpage.ClientAppointment.exists ? ServicesWithAppointments.push({service:ServiceInSubpage,subpage:true,index:ServiceIndexInSubpage,subPageIndex:Subpage_Index}) : null

      )
          );    

          var moment = require('moment');

          console.log(ServicesWithAppointments)
      
     return (
            
          <div> 
              <Header />
            <NavBar />
              
              <h2 style={{textAlign:"right"}}>{this.state.reserve.PageName}</h2>   
              

              <div class="AppointmentsArea">
{
  ServicesWithAppointments.map( appointment=>

    <div class="servicesAppointments">
<div>{appointment.service.ServiceName}</div>
<div>Price:  {appointment.service.price}</div>
<div>Date:  <input onChange={(e)=>this.DateChange(e,appointment)} type="date" min={moment().format("YYYY-MM-DD")} value={moment(appointment.service.ClientAppointment.Date,"D/M/YYYY").format("YYYY-MM-DD")}  /></div>
{/* <div>Time:  <input size="2" value={appointment.service.ClientAppointment.Time.split(":")[0]}/>h:<input size="2" value={appointment.service.ClientAppointment.Time.split(":")[1]}/>min</div> */}
<div>Time:  <select onChange={(e)=>this.DropDownchange(e,appointment)}>
  {this.allAppointmentOptions(appointment.service,appointment.service.ClientAppointment.Date)}
</select>

<button style={{display:this.state.ButtonDisplay}} onClick={()=>this.changeAppointmentButton(appointment)}>Change Appointment</button>

  </div>

    </div>

  )
}

              </div>
 
 <Footer/>
 </div>
 
         
 );

}

}

const mapStateToProps = state => ({
    
    service: state.submit.pages.services,
    reserve: state.submit.pages.reserve
});

 export default connect(mapStateToProps,{changePageConfiguration})(Reserve);