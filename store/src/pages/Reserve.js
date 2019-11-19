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

  DropDownchange=()=>{
this.setState({ButtonDisplay:"block"})
  }
  Datechange=(e)=>{
    this.setState({ButtonDisplay:"block"})

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

      if(moment(date.format("M/D/YYYY")+" "+nextTime.hour+":"+nextTime.min,"M/D/YYYY H:m").isBetween(
        moment(date.format("M/D/YYYY")+" "+service.Appointments[i].FromHour1+":"+service.Appointments[i].FromMin1,"M/D/YYYY H:m"),
        moment(date.format("M/D/YYYY")+" "+service.Appointments[i].ToHour1+":"+service.Appointments[i].ToMin1,"M/D/YYYY H:m") )
        ||
        moment(date.format("M/D/YYYY")+" "+nextTime.hour+":"+nextTime.min,"M/D/YYYY H:m").isBetween(
        moment(date.format("M/D/YYYY")+" "+service.Appointments[i].FromHour2+":"+service.Appointments[i].FromMin2,"M/D/YYYY H:m"),
        moment(date.format("M/D/YYYY")+" "+service.Appointments[i].ToHour2+":"+service.Appointments[i].ToMin2,"M/D/YYYY H:m") )
        ){
          console.log(nextTime.time==service.ClientAppointment.Time)
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
return optionsArray;
  }

  

componentWillMount(){
  
  //return <img src={Loader}></img> ;
 
}


    render() {
      var moment=require('moment')
      var ServicesWithAppointments=[];
      this.props.service.Services.map((serviceInMain,serviceIndex)=>
      serviceInMain.ClientAppointment.exists ? ServicesWithAppointments.push({service:serviceInMain,subpage:false,index:serviceIndex,subPageIndex:null}) : null
          );
      this.props.service.SubPages.map((Subpage,Subpage_Index)=>
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
<div>Date:  <input onChange={this.DateChange} type="date" min={moment().format("YYYY-MM-DD")} value={moment(appointment.service.ClientAppointment.Date,"D/M/YYYY").format("YYYY-MM-DD")}  /></div>
{/* <div>Time:  <input size="2" value={appointment.service.ClientAppointment.Time.split(":")[0]}/>h:<input size="2" value={appointment.service.ClientAppointment.Time.split(":")[1]}/>min</div> */}
<div>
<select onChange={this.DropDownchange}>
  {this.allAppointmentOptions(appointment.service,appointment.service.ClientAppointment.Date)}
</select>

<button style={{display:this.state.ButtonDisplay}}>Change Appointment</button>

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