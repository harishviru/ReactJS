import React ,{useState,useEffect}from 'react'
import axios from 'axios'

function DataFetchingOne() {

  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')


  useEffect(() => {
                axios.get('https://jsonplaceholder.typicode.com/posts')
                 .then(res=>{
                     console.log(res.data)
                     setPosts(res.data)
                 })
                 .catch(err=>{
                     console.log(err)
                     setError("something went wrong")
                 })

  }, [])
    return (
        <div>
            <ul>
             {
                 posts.map(post=>(<li key={post.id}>{post.title} </li>))
             }
            </ul>
     
            {error} 
        </div>
    )
}

export default DataFetchingOne
