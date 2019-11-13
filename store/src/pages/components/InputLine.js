import React, { Component } from 'react';
import * as constants from '../constants';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./InputLine.css";


export default class InputLine extends Component {
    
    constructor(props){
        super(props)
        this.state = {date: new Date() , startDate: new Date(),data:""};
        this.dateChanged = this.dateChanged.bind(this);
       // this.setState({data: this.props.data})
      }
      
      dateChanged(d){
        this.setState({date: d});
      }
    
      changeit =(e) => {
        
        this.props.changevalue(e.target.value);
      }
    render() {

      const header = this.props.header;
        const placeholder = this.props.placeholder;
        const type = this.props.type;
        const data = this.props.data;
        

      const linestyle = {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-start',
       
   
      }
      const buttonstyle = {
        minWidth:'2.5cm',
        padding:'3px',
        color:'white',
        margin:'3px',
        fontsize:'20px',
        textAlign:'center',
        
      }
      const headerstyle = {
        width:'25%',
        marginLeft:'0.5cm',
        marginTop:'2px',
        marginBottom:'2px',
        fontSize:constants.inputlinestyle.fontsize,
        minWidth:constants.inputlinestyle.minwidth,
        color:'blue',
        
   
      }
      const datastyle = {
        width:'65%',
        marginTop:'2px',
        marginBottom:'2px',
        fontSize:constants.inputlinestyle.fontsize,
        minWidth:constants.inputlinestyle.minwidth,
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-start',
        marginLeft:'0.5cm',
   
      }

      let inputfield= (typeoffield,dataoffield,dataActual) => {

        switch(typeoffield) {
          case 'inputnumber':
           return <input placeholder={dataoffield} type='number' min='0' style={datastyle}/>
          case 'input':
           return <input placeholder={dataoffield} type='text' onChange={this.changeit} value={dataActual}   style={datastyle}/>
          case 'password':
           return <input placeholder={dataoffield} type='password' onChange={this.changeit} value={dataActual}   style={datastyle}/>
          case 'textarea':
          return <textarea placeholder={dataoffield} type='text' onChange={this.changeit} value={dataActual} rows="3" style={datastyle}/>
          case 'inputdate':
          return <div  style={datastyle}><DatePicker selected={this.state.date}
          onChange={this.dateChanged} dateFormat="dd/MM/yyyy"/></div>
          case 'buttons':
          var res = dataoffield.split("|");
          return <div  style={datastyle}> {res.map(
            (link,key) => <div class='buttonstyles' style={buttonstyle}>{link}</div>
            )}</div>
        case 'text':
        return <div style={datastyle}>{dataActual}</div>
          default:
            return null;
        }

      }

        

return <div style={linestyle}>
                 <div style={headerstyle}>{header}</div>
                  {inputfield(type,placeholder,data)}
                 
 </div>
                  



          

}



}
