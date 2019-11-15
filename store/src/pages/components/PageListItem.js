import React, { Component } from 'react';
import {connect} from 'react-redux';

import {changecontrolpage} from "../../actions/submitaction"


// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./PageListItem.css"

 class PageListItem extends Component {

    constructor(props) {
        super(props);

        
        this.state = {page:this.props.page}
}






pageClicked(pageurl) {
    // this.listSubPages(pageurl);
if (pageurl.includes("/")){this.props.changecontrolpage("submit_new_activsubepage",pageurl);}
else {this.props.changecontrolpage("submit_new_activepage",pageurl);
      this.props.changecontrolpage("submit_new_activsubepage","");}
 }

setActivedisplay = (x,y) => {
      console.log("the active page "+x.url + " , "+ y + " , " + x.exists)
     
    if (x.url==y && x.exists)  {return {color:"white",background:"gray"}; }
   else if(!x.exists){return {display:"none"};}
   
}

checkifexist = (obj) =>{ if (obj.exists) {
    return <div 
    style={this.setActivedisplay(this.props.page,this.checkifsubpage(this.props.page))} 
    class="mainPage"  onClick={()=>this.pageClicked(this.props.page.url)}>
    {this.props.page.PageName}
    </div>
    }}

    checkifsubpage = (obj) => {
        if(obj.url.includes("/")){return this.props.control.activeSubpageToControl}
        else return this.props.control.activePageToControl
    }




componentWillMount(){

    //this.props.fetchcontacts();
    // this.props.fetchalldata('none','none');
    
}

    render() {
        return (
         <div>
            {this.checkifexist(this.props.page)}
            </div>
           
        
);

}

}

const mapStateToProps = state => ({
    control: state.submit.pages.control,

    
});




 export default connect(mapStateToProps,{changecontrolpage})(PageListItem);