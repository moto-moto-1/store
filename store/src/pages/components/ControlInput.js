import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import InputLine from "./InputLine"
import {changePageConfiguration} from "../../actions/submitaction"
import Item from "../components/Item"

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
            contact: { 
                       PageName:this.props.contact.PageName,
                       FacebookAccount: this.props.contact.FacebookAccount,
                       InstagramAccount:  this.props.contact.InstagramAccount,
                       TwitterAccount:  this.props.contact.TwitterAccount,
                       email:  this.props.contact.email,
                       map:  this.props.contact.map,
                       Telephone:  this.props.contact.Telephone,
                       YoutubeAccount:  this.props.contact.YoutubeAccount,
                       branchs: this.props.contact.branchs
                    },
                      
            about:{
                       PageName:this.props.about.PageName,
                       Details : this.props.about.Details,

            },
            
            header:{
                name:this.props.header.name,
                image:this.props.header.image,

            },

            

            products:this.props.products,
            services:this.props.services,
            cart:this.props.cart,     
            reserve:this.props.reserve,
            txtalgn:{textAlign:this.props.Header.direction},
            lg:this.props.lg[this.props.Header.language]
                    
                    
                    
                    };  



        
      }

      componentWillMount(){

  
}

paymentMethod(e,index){
    let cartpayment=this.state.cart;
    console.log(e.target.checked)
    cartpayment.PaymentMethodOptions[index].exists=e.target.checked

this.setState({cart:cartpayment})
}


changeit(id,event){
//   console.log("entered inside")
    switch (id.page) {
        case "contact":
            if(id.branchs){
                
                const newBranchsArray=this.state.contact.branchs;
                (id.value=="BranchName") ?newBranchsArray[id.key].BranchName=event : newBranchsArray[id.key].BranchLocation=event
                    this.setState({contact: {...this.state.contact,branchs:newBranchsArray}}) 
                }
                else this.setState({contact: {...this.state.contact,[id.value]:event}})
                
            break;
            case "about":
                    this.setState({about: {...this.state.about,[id.value]:event}})
            break;
            case "reserve":
                this.setState({reserve: {...this.state.reserve,[id.value]:event}})
             break;
             case "cart":
                this.setState({cart: {...this.state.cart,[id.value]:event}})
             break;

            case "header":
                    this.setState({header: {...this.state.header,name:event}})
            break;
            case "products":
                if(id.pageindex=="off" )
                    this.setState({products: {...this.state.products,[id.value]:event}})
                else {
                let products=this.state.products;
                products.SubPages[id.pageindex].PageName=event
                this.setState({products: products})
                }
            break;
            case "services":
                if(id.pageindex=="off" )
                    this.setState({services: {...this.state.services,[id.value]:event}})
                else {
                let services=this.state.services;
                services.SubPages[id.pageindex].PageName=event
                this.setState({services: services})
                }
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
            if(this.props.control.activeSubpageToControl=="")
        {return <div><InputLine header={this.state.lg.ctrl.pgNm} placeholder=""
         data={this.state.products.PageName} 
         changevalue={(e)=>this.changeit({page:"products",pageindex:"off",value:"PageName"},e)} 
         type="input"/>
          <div style={this.state.txtalgn} ><button onClick={()=>this.props.changePageConfiguration("products",this.state.products)}> {this.state.lg.ctrl.svBtn} </button></div>
         <Item/>
         </div>
         }
          else{
          const subpagenumber=this.props.control.activeSubpageToControl.substr(this.props.control.activeSubpageToControl.length -1)-1
         
          return <div><InputLine header={this.state.lg.ctrl.sbPgNm} placeholder=""
          data={this.state.products.SubPages[subpagenumber].PageName} 
          changevalue={(e)=>this.changeit({page:"products",pageindex:subpagenumber,value:"PageName"},e)} 
          type="input"/>
           <div style={this.state.txtalgn} ><button onClick={()=>this.props.changePageConfiguration("products",this.state.products)}> {this.state.lg.ctrl.svBtn} </button></div>
          <Item/>

          </div>
          }
         

        break; 
        
        case "services":
                if(this.props.control.activeSubpageToControl=="")
                {return <div><InputLine header={this.state.lg.ctrl.pgNm} placeholder=""
                 data={this.state.services.PageName} 
                 changevalue={(e)=>this.changeit({page:"services",pageindex:"off",value:"PageName"},e)} 
                 type="input"/>
                  <div style={this.state.txtalgn} ><button onClick={()=>this.props.changePageConfiguration("services",this.state.services)}> {this.state.lg.ctrl.svBtn} </button></div>
                 <Item/>

                 </div>
                 }
                  else{
                  const subpagenumber=this.props.control.activeSubpageToControl.substr(this.props.control.activeSubpageToControl.length -1)-1
                 
                  return <div><InputLine header={this.state.lg.ctrl.sbPgNm} placeholder=""
                  data={this.state.services.SubPages[subpagenumber].PageName} 
                  changevalue={(e)=>this.changeit({page:"services",pageindex:subpagenumber,value:"PageName"},e)} 
                  type="input"/>
                  <div style={this.state.txtalgn} > <button onClick={()=>this.props.changePageConfiguration("services",this.state.services)}> {this.state.lg.ctrl.svBtn} </button></div>
                  <Item/>

                  </div>
                  }
                 
        
                break; 
                

        case "contact":
            return <div>
                <br></br>
                <InputLine header={this.state.lg.ctrl.pgNm} placeholder=""
                data={this.state.contact.PageName} 
                changevalue={(e)=>this.changeit({page:"contact",value:"PageName"},e)} 
                type="input"/>
                

             <InputLine header={this.state.lg.ctrl.cnct.fbAcc} placeholder=""
             data={this.state.contact.FacebookAccount} 
             changevalue={(e)=>this.changeit({page:"contact",value:"FacebookAccount"},e)} type="input"/>

             <InputLine header={this.state.lg.ctrl.cnct.twAcc} placeholder="" 
             data={this.state.contact.TwitterAccount} 
             changevalue={(e)=>this.changeit({page:"contact",value:"TwitterAccount"},e)}  type="input"/>

             <InputLine header={this.state.lg.ctrl.cnct.ytAcc} placeholder="" 
             data={this.state.contact.YoutubeAccount} 
             changevalue={(e)=>this.changeit({page:"contact",value:"YoutubeAccount"},e)}   type="input"/>

             <InputLine header={this.state.lg.ctrl.cnct.insAcc} placeholder="" 
             data={this.state.contact.InstagramAccount} 
             changevalue={(e)=>this.changeit({page:"contact",value:"InstagramAccount"},e)}   type="input"/>

             <InputLine header={this.state.lg.ctrl.cnct.em} placeholder="" 
             data={this.state.contact.email} 
             changevalue={(e)=>this.changeit({page:"contact",value:"email"},e)}   type="input"/>

             <InputLine header={this.state.lg.ctrl.cnct.tl} placeholder="" 
             data={this.state.contact.Telephone} 
             changevalue={(e)=>this.changeit({page:"contact",value:"Telephone"},e)}   type="input"/>
            
            {this.state.contact.branchs.map((branch,key)=>
            <div>
            <br></br>
             <InputLine header={this.state.lg.ctrl.cnct.BrnNm} placeholder="" data={branch.BranchName} 
             changevalue={(e)=>this.changeit({branchs:true,page:"contact",value:"BranchName",key:key},e)}   type="input"/>

             <InputLine header={this.state.lg.ctrl.cnct.BrnAdd} placeholder="" data={branch.BranchLocation} 
             changevalue={(e)=>this.changeit({branchs:true,page:"contact",value:"BranchLocation",key:key},e)}   type="input"/>

           </div>
            )}
           <div style={this.state.txtalgn} >  
            <button onClick={this.AddBranch}> {this.state.lg.ctrl.cnct.addBrnBtn} </button><br></br>
            <button onClick={()=>this.props.changePageConfiguration("contact",this.state.contact)}> {this.state.lg.ctrl.svBtn} </button></div>
            </div>
            break;

            case "aboutus":
        return <div>
        <br></br>

        <InputLine header={this.state.lg.ctrl.pgNm} placeholder=""
                data={this.state.about.PageName} 
                changevalue={(e)=>this.changeit({page:"about",value:"PageName"},e)} 
                type="input"/>

        <InputLine header={this.state.lg.ctrl.cmpNm} placeholder="write your company name here" 
        data={this.state.header.name} 
        changevalue={(e)=>this.changeit({page:"header",value:"name"},e)} type="input"/>
        <div style={this.state.txtalgn} > <button onClick={()=>this.props.changePageConfiguration("header",this.state.header)}> {this.state.lg.ctrl.svBtn} </button></div>


        <InputLine header={this.state.lg.ctrl.abt.btStm} placeholder={this.state.lg.ctrl.abt.btStmPlHldr} data={this.state.about.Details} changevalue={(e)=>this.changeit({page:"about",value:"Details"},e)} type="textarea"/>
       <div style={this.state.txtalgn} > <button onClick={()=>this.props.changePageConfiguration("about",this.state.about)}> {this.state.lg.ctrl.svBtn} </button></div>

        </div>
        break; 
        case "cart":
        return <div>
            <InputLine header={this.state.lg.ctrl.pgNm} placeholder=""
                data={this.state.cart.PageName} 
                changevalue={(e)=>this.changeit({page:"cart",value:"PageName"},e)} 
                type="input"/>
                 <div style={this.state.txtalgn} ><button onClick={()=>this.props.changePageConfiguration("cart",this.state.cart)}> {this.state.lg.ctrl.svBtn} </button></div>
                

            <h2 style={{textAlign:this.props.Header.direction}}>{this.state.lg.ctrl.crt.pymthd}</h2>
            {this.state.cart.PaymentMethodOptions.map( (option,index) =><div style={{textAlign:this.props.Header.direction,display:"flex",flexDirection:this.props.Header.flxdir}}>
               <input type="checkbox" defaultChecked={option.exists} onChange={(e)=>this.paymentMethod(e,index)}></input>{option.Name}<br></br>
                   </div>


)}

          </div>
        break;

        case "reserve":
                return <div><InputLine header="Page Name" placeholder=""
                data={this.state.reserve.PageName} 
                changevalue={(e)=>this.changeit({page:"reserve",value:"PageName"},e)} 
                type="input"/>
                <div style={this.state.txtalgn} > <button onClick={()=>this.props.changePageConfiguration("reserve",this.state.reserve)}> {this.state.lg.ctrl.svBtn} </button></div>
                
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
    Header: state.submit.Header.style,
    lg:state.submit.languages



    
});




 export default connect(mapStateToProps,{changePageConfiguration})(ControlInput);