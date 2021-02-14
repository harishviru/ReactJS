import React, { Component } from 'react'
import axios from 'axios'

let baseURL='https://jsonplaceholder.typicode.com/posts/1'

 //04.Delete (Request)
 class DeleteList extends Component {

    constructor(props) {
        super(props)
        this.state = {
             msg:'',
             errorMsg:''
        }
    }
    
    componentDidMount(){
        axios
        .all([
          axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
          axios.get('https://jsonplaceholder.typicode.com/posts?_limit=2')
        ])
        .then(res=>{
            console.log(res)
        })
        .catch(err => console.error(err));
        //Delete
        axios.delete(`${baseURL}`)
             .then(response=>{
                 console.log(response)
                 this.setState({
                    msg:`${response.status} -  ${response.statusText} `
                 })
             })
            .catch(error=>{
                 console.log(error)
                 this.setState({
                    errorMsg:'Error while get the data...!'
                 })
            })
    }


    render() {
         const {msg,errorMsg}=this.state
        return (
            <div>
            
                   <h2 style={{color:'green',fontSize:'30px',textAlign:'center'}}>Delete an item status :{msg}</h2>
                 
                   {errorMsg.length? <h2 style={{color:'red',fontSize:'30px',textAlign:'center'}}>Delete an item status :{errorMsg}</h2> :'' }

              
            </div>
        )
    }
}

export default DeleteList
