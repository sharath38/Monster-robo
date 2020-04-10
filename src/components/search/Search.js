import React from 'react';
import './Search.css';

 export const SearchBox = ({...props}) => {
    return (
       
        <input type='search' 
        className = 'search-field'
        placeholder = { props.placeholder }
        onChange = { props.handleChange }/>
      
    )
}
