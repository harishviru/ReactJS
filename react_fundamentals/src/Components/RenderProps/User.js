import React, { Component } from 'react'

 class User extends Component {
    render() {
        return (
            <div>
                 {/* {this.props.name} */}
                 {/* for arrow function  */}
                 {/* {this.props.name()} */}
                 {this.props.name(true)}
            </div>
        )
    }
}

export default User
