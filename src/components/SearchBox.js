import React from 'react';

const SearchBox = ({searchfield,searchChange}) => {
    return(
       <div className='col-2 my-2 my-lg-0'>
           <input className='form-control mr-sm-2' type='search' placeholder='Search Robot' onChange={searchChange}/> 
       </div>
    )
}

export default SearchBox ;