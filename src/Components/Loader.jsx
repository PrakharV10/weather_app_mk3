import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Loader({api_call}) {
    return (
        <div className="loader-main">
            <div className="pv">
                <a href="https://prakhar-varshney-mk2.netlify.app/" target="_blank" rel="noreferrer">pv_Codes</a>
            </div>
            <div className="loader-container">
                <div className="loader-text">
                    What's The Weather?
                </div>
                <form onSubmit ={(api_call)} >
                <input type="text" name="location" placeholder="Search your city..." autoComplete="off" autoCapitalize="on" required/>
                    <button>
                        <FontAwesomeIcon icon={faSearch}
                        size ={'lg'} />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Loader
