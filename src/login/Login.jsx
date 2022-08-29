import React from 'react'
import { useState } from 'react'
import "./login.scss"

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    // const[counter,setCounter]=useState(0)

    const submitCredentials= ()=> {
        console.log(email, password)
        fetch("http://localhost:5000/login-body",{
            method:"POST",
            headers:{
                // accept:"aplication.json",
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                email: email,
                password:password
            })
        })
        .then((response)=>{
            setEmail("")
            setPassword ("")
            response.json()
            .then(data=>{
                console.log(data)
            })
            alert("Te has logeado correctamente")
        })
    }

    return (
        <div className="login">
            <h1 className="content">Login</h1>
            <div className="field">
                <label className="label">Ingresa tu email </label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input is-success" type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                </div>
            </div>

            <div className="field">
                <label className="label">Ingresa tu contraseña </label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input is-success" type="password" placeholder="e.g. beatriz@gmail.com" value={password} onChange={(event) => setPassword(event.target.value)} />
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                    </span>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-primary" onClick={() => submitCredentials()}>Acceder</button>
                    </div>
                </div>
            </div>
        </div>
)}

export default Login