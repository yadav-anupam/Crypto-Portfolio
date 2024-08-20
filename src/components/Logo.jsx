import React from 'react'

function Logo({width = '50px'}) {
  const logourl = import.meta.env.VITE_LOGO_URL;
  return (
   
    <img src={logourl} alt="Logo" width={width} className='border-radius: 0.125rem;' />
  )
}

export default Logo