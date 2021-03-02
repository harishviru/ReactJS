import React ,{useState,useEffect}from 'react'
import axios from 'axios'

function DataFetchingTwo() {

  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [error, setError] = useState('')

  useEffect(() => {
                axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                 .then(res=>{
                     console.log(res)
                     setPost(res.data)
                 })
                 .catch(err=>{
                     console.log(err)
                     setError("something went wrong")
                 })

  }, [id])
    return (
      <div>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br/>
         {post.title}
         {error}   


      </div>
    );
}

export default DataFetchingTwo
