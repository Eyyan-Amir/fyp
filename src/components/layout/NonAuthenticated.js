import React from 'react';
import Header from "./Header"

function NonAuthenticated({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  )
}

export default NonAuthenticated;
