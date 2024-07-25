import Link from 'next/link';

import React from 'react'



const Footer = async () => {
 
    

  return (
    <footer className="text-black py-2">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <h3 className="text-lg font-semibold">Explore</h3>
          <ul className="mt-4">
            {/* {
              [1,2,3].map((menu:any, index:number) => <li key={index}><Link href={`/${menu.pageUrl === "home" ? "/" : menu.pageUrl}`}>{menu.pageUrl.toUpperCase()}</Link></li>)
            } */}
          </ul> 
        </div>
        <div className="text-center mb-4 lg:mb-0">
          <h3 className="text-lg font-semibold">Connect</h3>
          <ul className="mt-4">
            <li><a href="#" >TWITTER</a></li>
            <li><a href="#" >FACEBOOK</a></li>
            <li><a href="#" >INSTAGRAM</a></li>
          </ul>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold">LEGAL</h3>
          <ul className="mt-4">
            <li><a href="#" >PRIVACY POLICY</a></li>
            <li><a href="#" >TERMS OF USE</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 BlogApp. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer