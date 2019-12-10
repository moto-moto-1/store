import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import "./Login.css"
import InputLine from "./components/InputLine"
import { Link, BrowserRouter,Redirect} from 'react-router-dom'




class Register extends Component {

    constructor(props) {
        super(props);
        this.RegisterButton=this.RegisterButton.bind(this)

    this.state={
        username:this.props.UserData.UserName,
        password:this.props.UserData.password,
        lg:this.props.lg[this.props.Header.language],
            LinesStyle:{display:"flex",flexFlow:"wrap "+this.props.Header.flxdir}
        }

    }

RegisterButton=()=>{
    this.props.history.push("/login");


}

componentWillMount(){

    //this.props.fetchcontacts();
    // this.props.fetchalldata('none','none');
    
}

changeit=(id,event)=>{

if(id.field=="username"){this.setState({username:event.value})}
else if(id.field=="password"){this.setState({password:event.value})} else {}
}




    render() {
        return (

            <div>
                 <Header/>
            <NavBar/>
            <div class="loginContainer">
            <InputLine header={this.state.lg.usr.usrNm} placeholder=""
         data={this.state.username} 
         changevalue={(e)=>this.changeit({field:"username"},e)} 
         type="input"/>
<br/>

            <InputLine header={this.state.lg.usr.mail} placeholder=""
         data={this.state.username} 
         changevalue={(e)=>this.changeit({field:"username"},e)} 
         type="input"/>
<br/>
            <InputLine header={this.state.lg.usr.phone} placeholder=""
         data={this.state.username} 
         changevalue={(e)=>this.changeit({field:"username"},e)} 
         type="input"/>
<br/>
            <InputLine header={this.state.lg.usr.Address} placeholder=""
         data={this.state.username} 
         changevalue={(e)=>this.changeit({field:"username"},e)} 
         type="input"/>
<br/>
        <InputLine header={this.state.lg.usr.pass} placeholder=""
         data={this.state.password} 
         changevalue={(e)=>this.changeit({field:"password"},e)} 
         type="password"/>
         <InputLine header={this.state.lg.usr.Verpass} placeholder=""
         data={this.state.password} 
         changevalue={(e)=>this.changeit({field:"password"},e)} 
         type="password"/>

<div style={{textAlign:"center"}}> <button onClick={()=>this.RegisterButton()}>{this.state.lg.usr.Rgstr}</button></div>
</div>
<Footer/>
            </div>
        )}





}

const mapStateToProps = state => ({
    
    lg:state.submit.languages,
    Header:state.submit.Header.style,
    UserData:state.submit.UserData
    
});


export default connect(mapStateToProps,{})(Register);