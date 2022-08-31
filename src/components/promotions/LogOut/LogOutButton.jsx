import React from 'react'

const LogOutButton = () => {
  const logout = ()=> {
    // localStorage.clear();
    localStorage.removeItem('token')
    window.location.href='/'
  }
  
  return (
    <button className="button is-primary" onClick={ ()=>logout() }>Cierre de sesión</button>
  )
}

export default LogOutButton