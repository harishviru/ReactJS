import {useEffect} from 'react'

function useDocTitle(count) {
    useEffect(() => {
        document.title=`Clicked ${count}`
   }, [count])
}

export default useDocTitle
