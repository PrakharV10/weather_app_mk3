import React from 'react'

function ImageContainer(props) {
    return (
        <div 
        className ="image-container" 
        style={{backgroundImage : `url("${props.url}")`, cursor : "pointer"}}
        onClick = {()=>props.setBackground(props.url)}>
        </div>
    )
}

export default ImageContainer
