import React from 'react'
import Topbar from '../Layout/Topbar';
import Navbar from './Navbar';

const HEader = () => {
  return (
    <header className="border-b border bg-gray-50">
        {/*Top bar*/}
        <Topbar/>
        {/*Nav bar*/}
        <Navbar/>
        {/*Cart drawer*/}
    </header>
  )
}

export default HEader;