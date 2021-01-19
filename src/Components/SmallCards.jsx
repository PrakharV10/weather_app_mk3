import React from 'react'

function SmallCards(props) {
    return (
        <div className="small-cards">
            <div className="card-head">
                {props.name}
            </div>
            <div className="card-number">
                {props.number}
            </div>
            <div className="card-percent">
                {props.percent}
            </div>
        </div>
    )
}

export default SmallCards
