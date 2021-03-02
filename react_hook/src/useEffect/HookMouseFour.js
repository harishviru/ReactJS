import React,{useState,useEffect} from 'react'
//04
//Runing cleanup code ===componentWillUnmount
function HookMouseFour() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)



 const logMousemove=(e)=>{
        setX(e.clientX)
        setY(e.clientY)
      }

    useEffect(() => {
        console.log('useEffect is called')
      window.addEventListener('mousemove',logMousemove)
      return ()=>{
         console.log('clean up code... ')
         window.removeEventListener('mousemove',logMousemove)
      }
    },[])

    return (
        <div>
           Hooks-  X- {x}  ,Y -{y}  
        </div>
    )
}

export default HookMouseFour
