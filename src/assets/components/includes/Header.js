import React from 'react'

export default function Header() {
  return (
    <header>
        <div className='left'>
            <h1><a href='#'><button type='button' className='btn'>A.F</button></a></h1>
        </div>
        <div className='right'>
            <ul>
                <li><a href='#'>ABOUT</a></li>
                <li><a href='#'>SERVICES</a></li>
                <li><a href='#'>WORKS</a></li>
                <li><a href='#'>CONTACT</a></li>
            </ul>
        </div>
    </header>
  )
}
