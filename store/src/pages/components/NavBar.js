import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'


// import {fetchcontacts,fetchtasks,fetchsupplies,fetchteams,fetchalldata} from '../actions/getactions';
import "./NavBar.css"

class NavBar extends Component {

    constructor(props) {
        super(props);
       this.navref=React.createRef();
    //    this.getNumberOfItems=this.getNumberOfItems.bind(this)

        this.state = {isToggleOn: true, dropdownclick:"\u02C5",
         dropdowndata:
         [{page_arrow:"\u02C5",page_display:"false"},
         {page_arrow:"\u02C5",page_display:"false"},
         {page_arrow:"\u02C5",page_display:"false"},
         {page_arrow:"\u02C5",page_display:"false"},
         {page_arrow:"\u02C5",page_display:"false"},
         {page_arrow:"\u02C5",page_display:"false"},
         {page_arrow:"\u02C5",page_display:"false"},
         {page_arrow:"\u02C5",page_display:"false"}],
         
         navItemDisplay:"block",
        };

    
            
      }
     
      componentWillUpdate(){
        


      }

componentDidMount(){
    

    
    // (mq)? this.setState({display:"block"}):this.setState({display:"none"})

    //this.props.fetchcontacts();
    // this.props.fetchalldata('none','none');
    
}



havesubpage = (ind,length) => {
    // console.log(ind);
    if(length.length<1){return "";}
    else return this.state.dropdowndata[ind].page_arrow;
}

dropdownhandler = (ind) => {
    // e.preventDefault();
 



    let go=this.state.dropdowndata;
 

    if(this.state.dropdowndata[ind].page_display=='false'){
        go[ind].page_display='block';
        go[ind].page_arrow='\u02C4';
        this.setState({dropdowndata:go});
    
    }

    else if(this.state.dropdowndata[ind].page_display=='none'){
        go[ind].page_display='block';
        go[ind].page_arrow='\u02C4';
        this.setState({dropdowndata:go})}
    
    
   else if(this.state.dropdowndata[ind].page_display=='block'){
        go[ind].page_display='none';
        go[ind].page_arrow='\u02C5';
        this.setState({dropdowndata:go})}
}

handleButtonClick = (e) =>{
    e.preventDefault();
    if(this.state.dropdownclick=="\u02C5"){this.setState({dropdownclick:'\u02C4'})}
    else if(this.state.dropdownclick=="\u02C4"){this.setState({dropdownclick:'\u02C5'})}
    
    
    if(this.state.isToggleOn=='none'){this.setState({isToggleOn:'block'})}
    else if(this.state.isToggleOn=='block'){this.setState({isToggleOn:'none'})}
    else if(this.state.isToggleOn==true){this.setState({isToggleOn:'block'})}
    
    
}



 

    render() {
      
        
        window.addEventListener('resize', ()=> (this.navref.current)? //allow nav bar to be responsive on window resize
        (window.getComputedStyle(this.navref.current, null).display=="none"&&this.state.isToggleOn=="none")?this.setState({isToggleOn:"block"}):
        (window.getComputedStyle(this.navref.current, null).display=="block"&&this.state.isToggleOn=="block")?this.setState({isToggleOn:"none"}):null
         :null)


        return (

            

<div className="navigationbar" style={{flexDirection: (this.props.header.style.direction=="right")?'row-reverse':'row'}}>


<div className="navmainitem" >
   <a href="#"> {this.props.header.name}  </a>       

    
    <div className="navbutton" ref={this.navref} onClick={this.handleButtonClick}>{this.state.dropdownclick}</div>

</div>

{Object.keys(this.props.pages).map( (key,index)=>

<div className="navitems"  onClick={()=>this.dropdownhandler(index)} style={{display:this.state.isToggleOn}}>
       
        <div class="main_page" >
        <Link to={"/"+this.props.pages[key].url}>  { this.havesubpage(index,this.props.pages[key].SubPages)}{this.props.pages[key].PageName}</Link>
{(key=="cart")?(this.props.pages.cart.TotalItems>0)?<span style={{color:"red"}}>({this.props.pages.cart.TotalItems})</span>:null:null}
        </div>

        <div style={{display:this.state.dropdowndata[index].page_display}} class="dropdown_content">

            
           { this.props.pages[key].SubPages.map( (sub) =>
           <div class="sub_page">
               <Link  to={"/"+sub.url}> {sub.PageName} </Link>
            </div>   
               
             )}
        
            </div>



        </div>


     //console.log(this.props.pages[pages].url)
    
    

    )}

  

</div>
        
);


}

}

const mapStateToProps = state => ({
    navbarpages: state.get.NavigationBar.pages,
    navbarstyle: state.get.NavigationBar.style,
    header: state.get.Header,

    pages:state.submit.pages
    
});




 export default connect(mapStateToProps,{})(NavBar);