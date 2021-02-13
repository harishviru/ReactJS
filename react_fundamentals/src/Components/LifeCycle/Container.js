import React, { Component } from 'react'

//#03. UnMounting LifeCycle Method
class Container extends Component {
    constructor(props) {
      super(props);
      this.state = {show: true};
    }
    removeHeader = () => {
      this.setState({show: false});
    }
    render() {
      let myheader;
      if (this.state.show) {
        myheader = <Child />;
      };
      return (
        <div>
        {myheader}
        <button type="button" onClick={this.removeHeader}>Remove/Delete Header</button>
        </div>
      );
    }
  }
  class Child extends React.Component {
    componentWillUnmount() {
      alert("The component named Header is about to be unmounted.");
    }
    render() {
      return (
        <h1>Child componet is going to deletd when you click button!</h1>
      );
    }
  }
  
export default Container
