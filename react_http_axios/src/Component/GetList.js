import React, { Component } from 'react'
import axios from 'axios'

let baseURL='https://jsonplaceholder.typicode.com/posts'

//#01. GET (Request)
 class GetList extends Component {
     
    constructor(props) {
        super(props)
        this.state = {
            posts:[] ,
            errorMsg:''
        }
    }
    
componentDidMount(){
    axios.get(`${baseURL}`)
         .then(response=>{
             console.log(response)
             this.setState({
                posts:response.data
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
        const {posts,errorMsg} =this.state
        return (
            <>
                    <h2 style={{color:'green',fontSize:'30px',textAlign:'center'}}>List of posts</h2>
                    {
                        posts.length?
                        posts.map((post)=>
                            <div  style={{fontSize:'18px',fontFamily:'cursive',textTransform:'capitalize'}} key={post.id}>{post.id} : {post.title}</div>
                        )
                        :null
                    }
                    {
                      errorMsg.length?
                      <div  style={{color:'red',fontSize:'30px',textAlign:'center'}}> {errorMsg}</div> 
                      :null  
                    }
            </>
        )
    }
}

export default GetList
