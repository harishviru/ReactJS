import React, { Component } from 'react'


//#03 (ii). Destructuring  
 class Car extends Component {
     
      constructor(){
          super();
          this.state={
              cName:'Maruthi',
              xcolor:'Red'
          }
      }

     render() {
        const {name ,color}=this.props;
        const {cName,xcolor}=this.state;

        return (
            <div>
                 <div>{this.props.name} :{this.props.color}</div>
                 {/* By Destructuring...(Props) */}
                 <div>{name} :{color}</div>
                 {/* By Destructuring...(state) */}
                 <div>{cName} :{xcolor}</div>

            </div>
        )
    }
}

export default Car
