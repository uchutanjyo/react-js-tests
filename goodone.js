import React, { Component } from "react";


class MyComponent extends Component {
constructor(props) {
    super() 
        this.state = {
            color: 'red',
            name: 'Mark',
            isParagraphRendered: false
        }

}

toggle = () => {
  this.setState({ isParagraphRendered: !this.state.isParagraphRendered })
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



