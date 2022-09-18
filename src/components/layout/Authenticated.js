import React from 'react'
import Header from '../authenticated/Header';

function Authenticated({ children }) {
  return (
    <>
      <Header />
      <div className='contentWrapper'>{children}</div>
    </>
  )
}

export default Authenticated;
