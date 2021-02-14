import React, { Component } from 'react'
import axios from 'axios'

let baseURL='https://jsonplaceholder.typicode.com/posts/1'


//#03. UPDATE (PUT/PATCH) (Request)
 class UpdateList extends Component {
    constructor(props) {
        super(props)
        this.state = {
         userId:'',
         title:'',
         body:''
        }
    }
    changeHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    submitHandler=(event)=>{
        event.preventDefault()
       console.log(`${this.state.userId} -${this.state.title} -${this.state.body}`)
       
        //PUT/PATCH
        axios.put(`${baseURL}`,this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }
 
     render() {
         const {userId,title,body}=this.state
         return (
              <div>
                   <h2 style={{marginLeft:'300px'}}>Post the form Data</h2>
                <form onSubmit={this.submitHandler} style={{marginLeft:'300px'}}>
                   <input type="text" placeholder="id" name="id" value="1" disabled/> <br/>
                    <input type="text" placeholder="userId" name="userId" value={userId} onChange={this.changeHandler}/><br/>
                    <input type="text" placeholder="title" name="title" value={title} onChange={this.changeHandler}/><br/>
                    <input type="text" placeholder="body" name="body" value={body} onChange={this.changeHandler}/><br/>
                    <button type="submit">Submit</button>
             </form>
             </div>
         )
     }
}

export default UpdateList
