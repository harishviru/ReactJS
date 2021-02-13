import React from 'react'
import ReactDOM from 'react-dom'

function PortalsDemo() {
    return ReactDOM.createPortal(<div>Portals Demo</div>,document.getElementById('portal-root'))
}

export default PortalsDemo
