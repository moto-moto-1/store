import ReactDOM from "React";
import React, {Component} from 'react'; 

class Hello extends React.Component {
    render() {
      return <div>Hello {this.props.name}</div>;
    }
  }
  
  ReactDOM.render(
    <Hello name="World" />,
    document.getElementById('container')
  );
  