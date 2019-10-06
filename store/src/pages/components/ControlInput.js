import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import InputLine from "./InputLine"
import {changePageConfiguration} from "../../actions/submitaction"

import facebook from "../Social media Icons/facebook2.png";
import Twitter from "../Social media Icons/twitter2.png";
import Instagram from "../Social media Icons/instagram2.png";
import YouTube from "../Social media Icons/youtube2.png";




// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./ControlInput.css"

class ControlInput extends Component {


    constructor(props) {
        super(props);
       
    
        this.state = {
            contact: { FacebookAccount: this.props.contact.FacebookAccount,
                       InstagramAccount:  this.props.contact.InstagramAccount,
                       TwitterAccount:  this.props.contact.TwitterAccount,
                       email:  this.props.contact.email,
                       map:  this.props.contact.map,
                       Telephone:  this.props.contact.Telephone,
                       YoutubeAccount:  this.props.contact.YoutubeAccount,
                       branchs: this.props.contact.branchs
                    },
                      
            about:{
                       Details : this.props.about.Details,

            },
            cart:{

            },     
            header:{
                name:this.props.header.name,
                image:this.props.header.image,

            },      
                    
                    
                    
                    };  



        
      }

      componentWillMount(){

  
}
changeit(id,event){
  
    switch (id.page) {
        case "contact":
            if(id.branchs){
                const newBranchsArray=this.state.contact.branchs;
                (id.value=="BranchName") ?newBranchsArray[id.key].BranchName=event : newBranchsArray[id.key].BranchLocation=event
                    this.setState({contact: {...this.state.contact,branchs:{...this.state.contact.branchs,newBranchsArray}}}) 
                }
                else this.setState({contact: {...this.state.contact,[id.value]:event}})
                
            break;
            case "about":
                console.log("inside about change state");
                    this.setState({about: {...this.state.about,Details:event}})
            break;

            case "header":
                console.log("inside about change state");
                    this.setState({header: {...this.state.header,name:event}})
            break;
    
        default:
            break;
    }




}


AddBranch = (e) =>{
    e.preventDefault();
    this.state.contact.branchs.push({BranchName:"" , BranchLocation:""})
    this.setState({contact: {...this.state.contact}}) 
}

listInputs(controlPage){
switch (controlPage) {
        case "products":
        return <InputLine header="Page Name" placeholder="products" type="input"/>
        break; 
        
        case "services":
        return <InputLine header="Page Name" placeholder="services" type="input"/>
        break;

        case "contact":
            return <div>
                <br></br>

             <InputLine header="Facebook Account" placeholder=""
             data={this.state.contact.FacebookAccount} 
             changevalue={(e)=>this.changeit({page:"contact",value:"FacebookAccount"},e)} type="input"/>

             <InputLine header="Twitter Account" placeholder="" 
             data={this.state.contact.TwitterAccount} 
             changevalue={(e)=>this.changeit({page:"contact",value:"TwitterAccount"},e)}  type="input"/>

             <InputLine header="YouTube Account" placeholder="" 
             data={this.state.contact.YoutubeAccount} 
             changevalue={(e)=>this.changeit({page:"contact",value:"YoutubeAccount"},e)}   type="input"/>

             <InputLine header="Instagram Account" placeholder="" 
             data={this.state.contact.InstagramAccount} 
             changevalue={(e)=>this.changeit({page:"contact",value:"InstagramAccount"},e)}   type="input"/>

             <InputLine header="E-Mail address" placeholder="" 
             data={this.state.contact.email} 
             changevalue={(e)=>this.changeit({page:"contact",value:"email"},e)}   type="input"/>

             <InputLine header="Telephone Number" placeholder="" 
             data={this.state.contact.Telephone} 
             changevalue={(e)=>this.changeit({page:"contact",value:"Telephone"},e)}   type="input"/>
            
            {this.state.contact.branchs.map((branch,key)=>
            <div>
            <br></br>
             <InputLine header="Branch name" placeholder="" data={branch.BranchName} 
             changevalue={(e)=>this.changeit({branchs:true,page:"contact",value:"BranchName",key:key},e)}   type="input"/>

             <InputLine header="Branch Location" placeholder="" data={branch.BranchLocation} 
             changevalue={(e)=>this.changeit({branchs:true,page:"contact",value:"BranchLocation",key:key},e)}   type="input"/>

           </div>
            )}
            <button onClick={this.AddBranch}> Add New Branch </button><br></br>
            <button onClick={()=>this.props.changePageConfiguration("contact",this.state.contact)}> Save </button>
            </div>
            break;

            case "aboutus":
        return <div>
        <br></br>
        <InputLine header="Name" placeholder="write your company name here" 
        data={this.state.header.name} 
        changevalue={(e)=>this.changeit({page:"header",value:"name"},e)} type="input"/>
        <button onClick={()=>this.props.changePageConfiguration("header",this.state.header)}> Save </button>


        <InputLine header="About statment" placeholder="Write your about statment here" data={this.state.about.Details} changevalue={(e)=>this.changeit({page:"about",value:"Details"},e)} type="textarea"/>
        <button onClick={()=>this.props.changePageConfiguration("about",this.state.about)}> Save </button>

        </div>
        break; 

    default:
        break;
}
}

 
    render() {

      

        return (

<div> 

{this.listInputs(this.props.control.activePageToControl)}


    </div>
        
);

}

}

const mapStateToProps = state => ({
    contact: state.submit.pages.contact,
    about: state.submit.pages.about,
    cart: state.submit.pages.cart,
    reserve: state.submit.pages.reserve,
    control: state.submit.pages.control,
    products: state.submit.pages.products,
    services: state.submit.pages.services,
    header: state.submit.Header,



    
});




 export default connect(mapStateToProps,{changePageConfiguration})(ControlInput);