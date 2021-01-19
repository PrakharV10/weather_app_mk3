import React from 'react'
import ImageContainer from './ImageContainer'

function Sidebar({setBackground, results}) {

    return (
        <div className="side-bar">
            {
                results.map((item) => {
                    return <ImageContainer 
                    setBackground = {setBackground} 
                    url={item.urls.regular}
                    key = {item.id} />
                })
            }
            <ImageContainer setBackground={setBackground} results={results} />
        </div>
    )
}

export default Sidebar
