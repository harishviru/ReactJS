import React from 'react'
import moduleCss from './myStyle.module.css'
import './myStyle.css'


//#03.CSS Modules
function MyModuleStyle() {
 let className =true?'font':'';
    return (
        <div>
                <h2 className={moduleCss.error}>3.1 Modules CSS </h2>   
                <h2 className={`${moduleCss.error} box `}>3.2 Modules CSS </h2>    
                <h2 className={`${moduleCss.error} box ${className}`}>3.3 Modules CSS </h2>
        </div>
    )
}

export default MyModuleStyle
