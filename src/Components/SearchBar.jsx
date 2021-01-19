import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBar({api_call}) {

    return (
        <div className="search-bar">
            <form onSubmit={(api_call)}>
                <input type="text" name="location" placeholder="Search a city..." autoComplete="off" autoCapitalize="on" required/>
                <button>
                    <FontAwesomeIcon icon={faSearch}
                    size ={'lg'} />
                </button>
            </form>
        </div>
    )
}

export default SearchBar
