import React from 'react'

const LogOutButton = () => {
  const logout = ()=> {
    localStorage.removeItem( 'token' );
    window.location.href='/'
  }
  
  return (
    <button onClick={ ()=>logout() }>LogOutButton</button>
  )
}

export default LogOutButton