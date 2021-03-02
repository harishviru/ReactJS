import React,{useState,useEffect} from 'react'
//03
//Run effects only once ===componentDidMount
function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)



 const logMousemove=(e)=>{
        setX(e.clientX)
        setY(e.clientY)
      }

    useEffect(() => {
        console.log('useEffect is called')
      window.addEventListener('mousemove',logMousemove)
    },[])

    return (
        <div>
           Hooks-  X- {x}  ,Y -{y}  
        </div>
    )
}

export default HookMouse
