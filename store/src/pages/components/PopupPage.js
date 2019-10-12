import React, { Component } from 'react';
import {connect} from 'react-redux';
import InputLine from "./InputLine"

import {changecontrolpage} from "../../actions/submitaction"


// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./PopupPage.css"

 class PopupPage extends Component {

    constructor(props) {
        super(props);
        // this.props.type;
        // this.props.show;
        // this.props.subpageindex;
        // this.props.itemindex
        
        this.state = {
            
            products:this.props.products,
            services:this.props.services,
            
        }
}

fillcontents=()=>{
    console.log("inside fill content")
    console.log(" this is popUp "+this.props.type+" "+this.props.show+" "+this.props.subpageindex + " " +this.props.itemindex)
    if(this.props.type=="products" && this.props.show=="control" ){
        if(this.props.subpageindex==null){
   
           return <div>{this.props.products.Products[this.props.itemindex].ProductName}</div>
       }else{
           return <div>{this.props.products.SubPages[this.props.subpageindex].Products[this.props.itemindex].ProductName}</div>
       }
   
   
          
   
       }
   
       else if(this.props.type=="services" && this.props.show=="control" ){
           if(this.props.subpageindex==null){
               return <div>{this.props.services.Services[this.props.itemindex].ServiceName}</div>
           }else{
               return <div>{this.props.services.SubPages[this.props.subpageindex].Services[this.props.itemindex].ServiceName}</div>
           
           }
   
   
       }
   
    
}




componentWillMount(){

    //this.props.fetchcontacts();
    // this.props.fetchalldata('none','none');
    
}

 
exit=(e)=>{
this.props.exitsignal(false);
}

    render() {



        return (
        
            <div class="PopupPageBackground"  onClick={this.exit}>
        <div class="PopupPageWrapper">
<div  class="PopupPageNavigation">
    <div  class="PopupPageexit" onClick={this.exit}> X </div>
</div>

<div class="PopupPageContentWrapper">
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
   
    
});




 export default connect(mapStateToProps,{changecontrolpage})(PopupPage);