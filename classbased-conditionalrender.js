// from testdome - my solution
// runs in codesandbox:

import React, { Component } from "react"

class MyComponent extends Component {
constructor(props) {
    super() 
        this.state = {
            color: 'red',
            name: 'Mark',
            isParagraphRendered: false
        }

}
    render() {
        return <>
        <button onClick={this.toggle}>YO</button>
      {this.state.isParagraphRendered && 
       <div>{this.state.color}</div>}
        </>
    }
}

export default MyComponent;

// from the actual test:

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
class Message extends React.Component {
    constructor(props) {
       super() 
    
            this.state = {
                isParagraphRendered: false
     
            }
    
      }
    
    toggle = () => {
      this.setState({ isParagraphRendered: !this.state.isParagraphRendered })
    }
    
    
      render() {
        
        
        return (<React.Fragment>
              <a href="#" onClick={this.toggle}>Want to buy a new car?</a>
    
             {this.state.isParagraphRendered && 
              <p>Call +11 22 33 44 now!</p> }
            
            </React.Fragment>);
      }
    }
    
    document.body.innerHTML = "<div id='root'> </div>";
      
    const rootElement = document.getElementById("root");
    ReactDOM.render(<Message />, rootElement);
    
    console.log("Before click: " + rootElement.innerHTML);
    document.querySelector("a").click();
    console.log("After click: " + rootElement.innerHTML);