import React ,{useState,useEffect}from 'react'
import axios from 'axios'

function DataFetchingThree() {

  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [error, setError] = useState('')
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

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

  }, [idFromButtonClick])

const handleClick=()=>{
    setIdFromButtonClick(id)
}

    return (
      <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button type="button" onClick={handleClick}>
          Fetch Data
        </button>
        <br />
        {post.title}
        {error}
      </div>
    );
}

export default DataFetchingThree
