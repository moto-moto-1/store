import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import "./Login.css"
import InputLine from "./components/InputLine"
import { Link, BrowserRouter,Redirect } from 'react-router-dom'





class Login extends Component {

    constructor(props) {
        super(props);

        this.LoginButton=this.LoginButton.bind(this);

    this.state={
        username:this.props.UserData.UserName,
        password:this.props.UserData.password,
        lg:this.props.lg[this.props.Header.language],
            LinesStyle:{display:"flex",flexFlow:"wrap "+this.props.Header.flxdir}
        }

    }

LoginButton = () =>{

    this.props.history.push("/contact");
    //return <Redirect to='/contact'/>;
    //window.location.replace("/contact");

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
        <InputLine header={this.state.lg.usr.usrNm} placeholder={this.state.lg.usr.plcHUsrNm}
         data={this.state.username} 
         changevalue={(e)=>this.changeit({field:"username"},e)} 
         type="input"/>
<br/>
        <InputLine header={this.state.lg.usr.pass} placeholder={this.state.lg.usr.PlcHPass}
         data={this.state.password} 
         changevalue={(e)=>this.changeit({field:"password"},e)} 
         type="password"/>
              <div style={{textAlign:"center"}}> <button onClick={()=>this.LoginButton()}>{this.state.lg.usr.Lgn}</button></div>
               <center style={{fontWeight:"bolder"}}><Link  to="/register"> {this.state.lg.usr.Rgstr} </Link></center>
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


export default connect(mapStateToProps,{})(Login);