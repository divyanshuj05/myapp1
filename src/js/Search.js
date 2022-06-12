import React from 'react';
const Search = ({searchfield, Searchchange}) => {
    return(
        <div className='pa2'>
        <input type='search' placeholder="search robots" onChange={Searchchange}  className='pa3 ba b--green bg-lighest-blue'/>
        </div>
    );
}
export default Search;