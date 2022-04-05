import React from 'react'

type Props = {}

const Search = (props: Props) => {
    return (
        <div id="sb-search" className="sb-search">
            <form>
                <input className="sb-search-input" placeholder="Enter your search term..." type="search" name="search" id="search" />
                <input className="sb-search-submit" type="submit" />
                <span className="sb-icon-search"> </span>
            </form>
        </div>
        
       

    )
}

export default Search