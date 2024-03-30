import React from 'react'
import dot from './../images/second/Dot.png'
import albert from './../images/second/second-main.png'
import white from './../images/second/white-shadow.png'
import arrow from './../images/second/arrow.png'

export default function SecondPage() {
  return (
    <div id='SecondPage'>
      <div className='left'>
        <div className='dot'>
          <img src={dot} alt='dot' />
        </div>
        <div className='albert'>
          <div className='pic'><img src={albert} alt='albert' /></div>
          <div className='white'><img src={white} alt='white' /></div>
        </div>
      </div>

      <div className='right'>
        <h1>Product Designer, UI/UX<br />Designer, and Developer<br />based in Brazil.</h1>
        <p>Morbi quam velit, euismod in imperdiet vitae, elementum et elit. Nunc finibus,<br />felis sit amet sollicitudin sollicitudin, nisi magna feugiat enim, in maximus urna<br />enim ac tortor. Nunc in volutpat ipsum, molestie commodo odio. Quisque<br />auctor nisi mi. Aenean venenatis sapien et interdum interdum.</p>
        <div className='features'>
          <div className='one'>
            <h1>17+</h1>
            <h3>Years of <br /> Experience </h3>
          </div>
          <div className='one'>
          <h1>325+</h1>
          <h3>Completed <br/> Projects</h3>
          </div>
        </div>
        <div className='button'>
         <button type='button'>SAY HI
            <img src={arrow} alt='arrow' />
          </button>
        </div>

      </div>
    </div>
  )
}
