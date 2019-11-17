import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
//import {moment} from 'moment'
import 'moment-timezone'

// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./Services.css"

class Services extends Component {

  constructor(props) {
    super(props);
    this.toReservePage=this.toReservePage.bind(this);

    this.state={redirect:false}
    
  }

  toReservePage(isSubPage,SubPageIndex,ItemIndex) {
if(isSubPage){
var servicetoAppointment=this.props.service.SubPages[SubPageIndex].Services[ItemIndex];
}
else {
var servicetoAppointment=this.props.service.Services[ItemIndex];
}
// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();


var moment = require('moment');
let currentDate=moment();
let comparisonDate=moment('22:01','hh:mm')
alert(currentDate)
alert(currentDate.isAfter(comparisonDate))

//alert(m.add(5,'days'))
// today = dd + '/' + mm + '/' + yyyy;
//alert(m.format('dddd'))

let result=this.getAvailbleTimeInDate(currentDate.add(5,"days"),servicetoAppointment)

console.log(result)

for(let i=0;i<=6;i++){          //check if no appointments set in tree
if(servicetoAppointment.Appointments[i].exists){break}
else{   if(i==6){alert("No appointments avilable");return;}
        else continue;}
}

for(let i=0;i<=200;i++){

}


    this.setState({redirect:true})
    
  }
getNextTime(chosenHour,chosenMin,increments){
 console.log(chosenHour+" "+chosenMin)
 console.log("we are here")
  let chosenTime=chosenHour+":"+ ((chosenMin<=9) ? ("0"+chosenMin) :chosenMin);
  let nextMin=(Number(chosenMin)+Number(increments))%60
  let nextHour=(Number(chosenHour)+Math.floor((Number(chosenMin)+Number(increments))/60))%24
  let nextTime=nextHour+":"+((nextMin<=9) ? ("0"+nextMin) :nextMin);
return {hour:nextHour,min:((nextMin<=9) ? ("0"+nextMin) :nextMin),time:nextTime}
alert(" Chosen Time is " + chosenTime + " Next Time is " + nextTime)
}

getAvailbleTimeInDate(date,service){
 
  var moment = require('moment');
  if(date.isBefore(moment())){alert("Date is before today");return {status:false,reason:"date before today"}}

  for(let i=0;i<=6;i++){
   
  if(date.format('dddd')==service.Appointments[i].Day&&service.Appointments[i].exists){

  
    let startHour=service.Appointments[i].FromHour1;
    let startMin=service.Appointments[i].FromMin1;
    startMin=((startMin<=9) ? ("0"+startMin) :startMin)
    let nextTime={time:startHour+":"+startMin,hour:startHour,min:startMin}
    
  while(nextTime.hour<24){

    for(let l=0;l<service.TakenAppointments.length;l++){
console.log(service.TakenAppointments[l])
console.log(service.TakenAppointments.length)
console.log("finished loop")
// alert(moment())
// alert(moment(nextTime.hour+":"+nextTime.min,"HH:mm"))

      if((service.TakenAppointments[l].Time==nextTime.time && 
        service.TakenAppointments[l].Date==date.format('dd/mm/yyyy') &&
        service.TakenAppointments[l].number==service.Appointments[i].ServingLines) || 
        moment().isSameOrAfter(moment(nextTime.hour+":"+nextTime.min,"HH:mm")) ) 
        {continue; }
        
       else {
        service.ClientAppointment.Date=date.format('DD/MM/YYYY')
        service.ClientAppointment.Time=nextTime.time
        if(service.TakenAppointments[l].number<service.Appointments[i].ServingLines&&service.TakenAppointments[l].number!="")
         {service.TakenAppointments[l].number++}
        else service.TakenAppointments.push({Date:date.format('DD/MM/YYYY'),Time:nextTime.time,number:1})
         return {status:true,newService:service}
       }
 
    }
    nextTime=this.getNextTime(nextTime.hour, nextTime.min, service.Appointments[i].ServingTime)
  }
    alert("We were unable to find any appointment in that day")
    return {status:false,reason:"searched all avialable dates but not fortunate"}
  }
  else alert(date.format('dddd')+" is not available")

  }
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
      <div class="MoreInfo"><button onClick={()=>this.toReservePage(this.props.subpage,subpageIndex,index)}>Reserve appointment...</button></div>
    </div> 
    
  </div>
)}

</div>


        
);
}

}

const mapStateToProps = state => ({
    service: state.submit.pages.services,
    
    
});




 export default connect(mapStateToProps,{})(Services);

 