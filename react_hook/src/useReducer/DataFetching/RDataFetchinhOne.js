import React ,{useState,useEffect} from 'react'
import axios from 'axios'

function RDataFetchinhOne() {

const [loading, setLoading] = useState(true)
const [error, setError] = useState('')
const [post, setPost] = useState({})

useEffect( ()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res=>{
        console.log(res.data)
        setLoading(false)
        setPost(res.data)
        setError('')
    })
    .catch(err=>{
        console.log(err)
        setLoading(false)
        setPost({})
        setError("something went wrong")
    })
},[])
    return (
        <div>
             <br/>
             {loading ? "loading":post.title}
             {error ? error:null}
        </div>
    )
}

export default RDataFetchinhOne
