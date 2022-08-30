// import React from 'react'



// export const LoginButton = ( props )=> {
// 	const [ loggedIn, setLoggedIn ] = useState()

// 	const logout = ()=>{
// 		localStorage.removeItem( 'token' )
// 	}
	
// 	const login = ()=> {

// 		props.onLoginChange()
// 	}
	
// 	const clickManager = ()=> {
// 		if ( isLoggedIn() ) {
// 			logout()
// 		}
// 		else {
// 			login()
// 		}
// 	}

// 	return (
// 		<button onClick={ ()=>clickManager() }>
// 			{ 
// 				isLoggedIn()? 'Logout' : 'Login'
// 			}
// 		</button>
// 	)
// }