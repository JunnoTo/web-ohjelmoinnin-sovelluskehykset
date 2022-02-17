import React from 'react';

export default function MainHeader() {
  return(
    <div className="headerContainer">
        <div className="title">Amatsoni</div>
            <div className="searchContainer">
                <div className="searchBox">Search items <input type="text"/></div>
                    <button className="searchButton" onClick>Search</button>
            </div>
    </div>
  );
}
