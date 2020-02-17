import React from 'react'
import './header.css'
import Hamburger from './Hamburger';
import Title from './Title';
import SearchBar from './SearchBar';


export default function Header({open , setOpen , title}) {
   
    return (
        <div className="header">
           
            <Hamburger open={open} setOpen={setOpen} />
        
            <div className="componenttitle">
               <Title title={title} />
            </div>
            <div className="searchBox">
               <SearchBar />
            </div>
            
            
        </div>
    )
}
