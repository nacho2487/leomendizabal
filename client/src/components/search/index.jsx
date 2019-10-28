import React from 'react';
import './search.scss';

const Search = ({ className, onChange, placeholder, value }) => {
    return (
        <input className={`search ${className}`} onChange={(evt) => { onChange(evt.target.value) }} placeholder={placeholder} type="text" value={value}/>
    );
}

export default Search;