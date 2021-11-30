import React from 'react';
import './HeaderNav.scss';


export default function SearchBar() {
  return (

    // Please Note . I only make it for Design. Thats why I am not writing it with Form , validation , and expect.

      <div className="searchCont">
          <img src="/images/search.png"  className="searchIcon"/>
          <span>Search</span>
      </div>
     
  )
}
