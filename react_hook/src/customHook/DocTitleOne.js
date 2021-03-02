import React ,{useState,useEffect} from 'react'
import useDocTitle from './useDocTitle'

function DocTitleOne() {

const [count, setCount] = useState(0)

// useEffect(() => {
//      document.title=`Clicked ${count}`
// }, [count])
useDocTitle(count)

    return (
        <div>
              <button onClick={()=>setCount(count+1)}>Clicked {count}</button>
        </div>
    )
}

export default DocTitleOne
